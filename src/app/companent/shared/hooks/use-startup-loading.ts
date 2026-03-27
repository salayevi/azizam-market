"use client";

import { useEffect, useState } from "react";

type UseStartupLoadingOptions = {
  rootSelector?: string;
  minDurationMs?: number;
};

export default function useStartupLoading(
  options: UseStartupLoadingOptions = {},
) {
  const {
    rootSelector = "#mobile-page-root",
    minDurationMs = 700,
  } = options;

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const waitForImages = async (root: Element) => {
      const images = Array.from(root.querySelectorAll("img"));

      await Promise.all(
        images.map((img) => {
          if (img.complete) return Promise.resolve();

          return new Promise<void>((resolve) => {
            const done = () => resolve();
            img.addEventListener("load", done, { once: true });
            img.addEventListener("error", done, { once: true });
          });
        }),
      );
    };

    const waitForVideos = async (root: Element) => {
      const videos = Array.from(root.querySelectorAll("video"));

      await Promise.all(
        videos.map((video) => {
          if (video.readyState >= 2) return Promise.resolve();

          return new Promise<void>((resolve) => {
            const done = () => resolve();
            video.addEventListener("loadeddata", done, { once: true });
            video.addEventListener("error", done, { once: true });
          });
        }),
      );
    };

    const waitForMobileLayout = async () => {
      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => resolve());
        });
      });
    };

    const start = async () => {
      const startedAt = performance.now();

      await waitForMobileLayout();

      const root = document.querySelector(rootSelector);
      if (root) {
        await Promise.all([waitForImages(root), waitForVideos(root)]);
      }

      const elapsed = performance.now() - startedAt;
      const remain = Math.max(minDurationMs - elapsed, 0);

      if (remain > 0) {
        await new Promise((resolve) => setTimeout(resolve, remain));
      }

      if (!cancelled) {
        setIsReady(true);
      }
    };

    start();

    return () => {
      cancelled = true;
    };
  }, [rootSelector, minDurationMs]);

  return {
    isLoading: !isReady,
    isReady,
  };
}
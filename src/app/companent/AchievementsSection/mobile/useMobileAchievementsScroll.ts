"use client";

import { useEffect, useState } from "react";

type UseMobileAchievementsScrollOptions = {
  sectionId: string;
  totalItems: number;
};

export default function useMobileAchievementsScroll({
  sectionId,
  totalItems,
}: UseMobileAchievementsScrollOptions) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const passed = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      const progress = total > 0 ? passed / total : 0;

      const index = Math.min(
        totalItems - 1,
        Math.floor(progress * totalItems),
      );

      setActiveIndex(index);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sectionId, totalItems]);

  return activeIndex;
}
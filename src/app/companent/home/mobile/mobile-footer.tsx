"use client";

import AuthTriggerButton from "../../shared/auth/AuthTriggerButton";
import { mobileSections } from "@/config/mobile-system/mobile-sections";
import { mobileTypography } from "@/config/mobile-system/mobile-typography";
import { mobileSpacing } from "@/config/mobile-system/mobile-spacing";

export default function MobileFooter() {
  return (
    <section
      className="relative flex w-full items-end justify-center bg-[#f5f1f3]"
      style={{
        minHeight: mobileSections.footer.minHeight,
        paddingInline: mobileSpacing.pageX,
        paddingTop: mobileSections.footer.topPadding,
        paddingBottom: mobileSections.footer.bottomPadding,
      }}
    >
      <div
        className="pointer-events-none absolute rounded-full bg-[#cf2f8f]/20 blur-[120px]"
        style={{
          top: mobileSections.footer.glowTopOffset,
          width: mobileSections.footer.glowSize,
          height: mobileSections.footer.glowSize,
        }}
      />

      <div
        className="relative w-full"
        style={{ maxWidth: mobileSections.footer.contentMaxWidth }}
      >
        <div
          className="border border-[#efbfd8] bg-white text-center shadow-[0_30px_80px_rgba(207,47,143,0.15)]"
          style={{
            borderRadius: mobileSections.footer.cardRadius,
            paddingInline: mobileSections.footer.cardPadX,
            paddingTop: mobileSections.footer.cardPadY,
            paddingBottom: mobileSections.footer.cardPadY,
          }}
        >
          <p
            className="font-semibold uppercase tracking-[0.18em] text-[#9b6c7c]"
            style={{ fontSize: mobileTypography.footer.brandLabel }}
          >
            Azizam Market
          </p>

          <h2
            className="mt-4 font-bold leading-[1.05] tracking-[-0.04em] text-[#cf2f8f]"
            style={{ fontSize: mobileTypography.footer.title }}
          >
            Go‘zallik sizdan boshlanadi
          </h2>

          <p
            className="mx-auto mt-5 leading-[1.6] text-[#6f4d57]"
            style={{
              maxWidth: mobileSections.footer.bodyMaxWidth,
              fontSize: mobileTypography.footer.body,
            }}
          >
            Har bir mahsulot ortida mehr, e’tibor va nafislik mujassam.
            Siz bunga loyiqsiz.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3">
            <AuthTriggerButton
              mode="login"
              className="w-full rounded-full bg-[#cf2f8f] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(207,47,143,0.35)] active:scale-[0.97]"
              style={{ maxWidth: mobileSections.footer.ctaMaxWidth }}
            >
              Boshlash
            </AuthTriggerButton>

            <a
              href="#home-mobile"
              className="w-full rounded-full border border-[#cf2f8f] px-6 py-3 text-sm font-semibold text-[#cf2f8f] transition active:scale-[0.97]"
              style={{ maxWidth: mobileSections.footer.ctaMaxWidth }}
            >
              Yuqoriga qaytish
            </a>
          </div>

          <div className="my-8 h-px w-full bg-[#f1d6e4]" />

          <div
            className="flex items-center justify-center gap-5 font-medium text-[#8c6772]"
            style={{ fontSize: mobileTypography.footer.link }}
          >
            <a href="#about">About</a>
            <a href="#products">Mahsulot</a>
            <a href="#achievements">Yutuqlar</a>
          </div>

          <p
            className="mt-6 text-[#b08a97]"
            style={{ fontSize: mobileTypography.footer.note }}
          >
            © {new Date().getFullYear()} Azizam Market
          </p>
        </div>
      </div>
    </section>
  );
}

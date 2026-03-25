"use client";

import Image from "next/image";
import AuthTriggerButton from "../../shared/auth/AuthTriggerButton";
import { colors, radius, shadows } from "@/config/design-system";
import { mobileSpacing } from "@/config/mobile-system/mobile-spacing";
import { mobileTypography } from "@/config/mobile-system/mobile-typography";

export default function MobileTopbar() {
  return (
    <div
      className="absolute left-0 top-0 z-30 flex w-full items-center justify-between"
      style={{
        paddingInline: mobileSpacing.topbarX,
        paddingTop: mobileSpacing.topbarY,
      }}
    >
      <div
        className="inline-flex items-center justify-center backdrop-blur-md"
        style={{
          width: "52px",
          height: "52px",
          borderRadius: radius.full,
          backgroundColor: "rgba(255,255,255,0.18)",
          boxShadow: shadows.soft,
        }}
      >
        <Image src="/logo.png" alt="Azizam Market" width={28} height={28} />
      </div>

      <AuthTriggerButton
        mode="login"
        className="inline-flex items-center justify-center font-medium transition active:scale-[0.98]"
        style={{
          minHeight: "44px",
          paddingInline: "18px",
          borderRadius: radius.full,
          backgroundColor: "rgba(255,255,255,0.92)",
          color: colors.text.primary,
          fontSize: mobileTypography.topbar.button,
          boxShadow: shadows.soft,
        }}
      >
        Kirish
      </AuthTriggerButton>
    </div>
  );
}
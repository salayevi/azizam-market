"use client";

import { colors, shadows } from "@/config/design-system";
import { mobileNavbar } from "@/config/mobile-system/mobile-navbar";
import { mobileSpacing } from "@/config/mobile-system/mobile-spacing";
import { mobileTypography } from "@/config/mobile-system/mobile-typography";

const navItems = [
  { label: "Bosh sahifa", href: "#home-mobile" },
  { label: "About", href: "#about" },
  { label: "Mahsulot", href: "#products" },
  { label: "Yutuqlar", href: "#achievements" },
];

export default function MobileBottomNav() {
  return (
    <div
      className="fixed left-1/2 bottom-0 z-40 w-full -translate-x-1/2"
      style={{
        maxWidth: "480px",
        paddingInline: mobileSpacing.bottomNavX,
        paddingBottom: mobileSpacing.bottomNavY,
      }}
    >
      <nav
        className="grid grid-cols-4 items-center"
        style={{
          minHeight: mobileNavbar.height,
          borderRadius: mobileNavbar.radius,
          backgroundColor: "rgba(255,255,255,0.82)",
          backdropFilter: `blur(${mobileNavbar.blur})`,
          boxShadow: shadows.soft,
        }}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex h-full items-center justify-center text-center font-medium transition active:scale-[0.98]"
            style={{
              color: colors.text.primary,
              fontSize: mobileTypography.nav.label,
              paddingInline: "6px",
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
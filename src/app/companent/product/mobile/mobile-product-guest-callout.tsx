"use client";

import AuthTriggerButton from "../../shared/auth/AuthTriggerButton";

export default function MobileProductGuestCallout() {
  return (
    <div className="mt-4 rounded-[22px] border border-[#f1bdd9] bg-white/90 px-4 py-4 text-center shadow-sm">
      <p className="text-sm leading-6 text-[#6f4d57]">
        Mahsulot bilan ishlash uchun avval tizimga kiring.
      </p>

      <div className="mt-3 flex justify-center">
        <AuthTriggerButton
          mode="login"
          className="rounded-full bg-[#cf2f8f] px-5 py-3 text-sm font-semibold text-white"
        >
          Kirish
        </AuthTriggerButton>
      </div>
    </div>
  );
}
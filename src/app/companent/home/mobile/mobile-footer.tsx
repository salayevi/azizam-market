"use client";

import AuthTriggerButton from "../../shared/auth/AuthTriggerButton";

export default function MobileFooter() {
  return (
    <section
      className="relative flex min-h-[100svh] w-full items-end justify-center bg-[#f5f1f3] px-5"
      style={{
        paddingBottom: "120px",
        paddingTop: "80px",
      }}
    >
      <div className="w-full max-w-[380px] rounded-[32px] border border-[#efbfd8] bg-white px-6 py-10 text-center shadow-lg">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#8c6772]">
          Azizam Market
        </p>

        <h2 className="mt-4 text-[42px] font-bold leading-none tracking-[-0.04em] text-[#cf2f8f]">
          Siz Azizsiz
        </h2>

        <p className="mx-auto mt-5 max-w-[280px] text-[15px] leading-6 text-[#6f4d57]">
          Go‘zallik, e’tibor va mehr uyg‘unlashgan joyga xush kelibsiz.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3">
          <AuthTriggerButton
            mode="login"
            className="rounded-full bg-[#cf2f8f] px-6 py-3 text-sm font-semibold text-white"
          >
            Kirish
          </AuthTriggerButton>

          <a
            href="#home-mobile"
            className="rounded-full border border-[#cf2f8f] px-6 py-3 text-sm font-semibold text-[#cf2f8f]"
          >
            Boshiga qaytish
          </a>
        </div>
      </div>
    </section>
  );
}
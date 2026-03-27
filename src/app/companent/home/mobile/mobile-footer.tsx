"use client";

import AuthTriggerButton from "../../shared/auth/AuthTriggerButton";

export default function MobileFooter() {
  return (
    <section
      className="relative flex min-h-[100svh] w-full items-end justify-center bg-[#f5f1f3] px-5"
      style={{
        paddingBottom: "120px",
        paddingTop: "100px",
      }}
    >
      {/* glow background */}
      <div className="pointer-events-none absolute top-[-120px] h-[300px] w-[300px] rounded-full bg-[#cf2f8f]/20 blur-[120px]" />

      <div className="relative w-full max-w-[380px]">
        {/* main card */}
        <div className="rounded-[36px] border border-[#efbfd8] bg-white px-7 py-12 text-center shadow-[0_30px_80px_rgba(207,47,143,0.15)]">
          {/* brand */}
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#9b6c7c]">
            Azizam Market
          </p>

          {/* main headline */}
          <h2 className="mt-4 text-[40px] font-bold leading-[1.05] tracking-[-0.04em] text-[#cf2f8f]">
            Go‘zallik sizdan boshlanadi
          </h2>

          {/* description */}
          <p className="mx-auto mt-5 max-w-[280px] text-[15px] leading-[1.6] text-[#6f4d57]">
            Har bir mahsulot ortida mehr, e’tibor va nafislik mujassam.
            Siz bunga loyiqsiz.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <AuthTriggerButton
              mode="login"
              className="w-full max-w-[240px] rounded-full bg-[#cf2f8f] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(207,47,143,0.35)] active:scale-[0.97]"
            >
              Boshlash
            </AuthTriggerButton>

            <a
              href="#home-mobile"
              className="w-full max-w-[240px] rounded-full border border-[#cf2f8f] px-6 py-3 text-sm font-semibold text-[#cf2f8f] transition active:scale-[0.97]"
            >
              Yuqoriga qaytish
            </a>
          </div>

          {/* divider */}
          <div className="my-8 h-px w-full bg-[#f1d6e4]" />

          {/* nav links */}
          <div className="flex items-center justify-center gap-5 text-[13px] font-medium text-[#8c6772]">
            <a href="#about">About</a>
            <a href="#products">Mahsulot</a>
            <a href="#achievements">Yutuqlar</a>
          </div>

          {/* bottom note */}
          <p className="mt-6 text-[12px] text-[#b08a97]">
            © {new Date().getFullYear()} Azizam Market
          </p>
        </div>
      </div>
    </section>
  );
}
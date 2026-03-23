"use client";

import AuthTriggerButton from "../auth/AuthTriggerButton";

type Props = {
  accent: string;
};

export default function ProductGuestCallout({ accent }: Props) {
  return (
    <div className="relative z-30 mt-8 rounded-3xl border border-red-300/40 bg-red-50/80 p-5 shadow-sm backdrop-blur-sm">
      <p className="text-sm leading-6 font-medium text-red-600">
        Buyurtma va narx uchun Ro‘yxatdan o‘ting yoki Kirish qiling, bizda
        Ro‘yxat va Kirish tizimi judayam oson.
      </p>

      <div className="mt-5">
        <AuthTriggerButton
          mode="register"
          className="rounded-full bg-[#d13ea2] px-6 py-3 text-white font-medium transition hover:scale-[1.03]"
        >
          Ro&apos;yxatdan o&apos;tish
        </AuthTriggerButton>
      </div>
    </div>
  );
}

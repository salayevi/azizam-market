import React from "react";
import AuthTriggerButton from "../../auth/AuthTriggerButton";

const Footer = () => {
  return (
    <div>
      <section id="footer" className="min-h-screen flex flex-col">
        {/* CTA */}
        <div
          className="flex flex-col items-center justify-center text-center text-white py-24 px-6"
          style={{
            backgroundImage: "url('/rose-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            Azizamga qo‘shiling
          </h2>

          <p className="text-2xl font-medium mb-4">
            Har bir sovg‘a — e’tibor ifodasi.
          </p>

          <p className="text-xl max-w-3xl mb-10">
            Azizam Market orqali yaqinlaringiz uchun eng estetik sovg‘alarni
            tanlang.
          </p>

          <AuthTriggerButton
            mode="login"
            className="rounded-full border border-white/20 px-6 py-3 text-white font-medium"
          >
            Kirish
          </AuthTriggerButton>
        </div>

        {/* MAIN FOOTER */}
        <div className="bg-[#f4f4f4] py-24 px-10">
          <div className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto items-center">
            {/* LEFT */}
            <div>
              <h3 className="text-6xl md:text-7xl font-bold text-[#7c213d] leading-tight">
                O'ZINGIZ <br />
                UCHUN <br />
                SAQLANG
              </h3>
            </div>

            {/* RIGHT */}
            <div className="text-[#d13ea2]">
              <p className="mb-6 text-lg">
                Ro'yxatdan o'ting va quyidagilarga ega bo‘ling:
              </p>

              <ul className="mb-8 list-disc ml-5 space-y-3 text-lg">
                <li>Premium sovg‘a kolleksiyasi</li>
                <li>Maxsus chegirmalar</li>
                <li>Shaxsiy tavsiyalar</li>
                <li>Tezkor buyurtma tizimi</li>
              </ul>

              <AuthTriggerButton
                mode="register"
                className="rounded-full bg-[#d13ea2] px-6 py-3 text-white font-medium transition hover:scale-[1.03]"
              >
                Ro&apos;yxatdan o&apos;tish
              </AuthTriggerButton>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="bg-[#f4f4f4] border-t border-[#e2e2e2] py-16 px-10">
          <div className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto text-[#7c213d]">
            {/* SOCIAL */}
            <div>
              <h4 className="text-2xl font-semibold mb-6">
                Ijtimoiy tarmoqlar
              </h4>

              <p className="text-lg mb-2">instagram: @azizam_market</p>

              <p className="text-lg">Telegram: @azizam_market</p>
            </div>

            {/* PARTNERSHIP */}
            <div>
              <h4 className="text-2xl font-semibold mb-6">
                Hamkorlik yoki ish uchun murojaat
              </h4>

              <p className="text-lg mb-2">instagram: @azizam_market</p>

              <p className="text-lg">Telegram: @azizam_market</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

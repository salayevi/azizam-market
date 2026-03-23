import React from 'react'

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

            <a
              href="/auth"
              className="bg-white text-[#d13ea2] px-10 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Ro&apos;yxatdan o&apos;tish
            </a>
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

                <a
                  href="/auth"
                  className="border-2 border-[#7c213d] px-8 py-3 rounded-full text-[#7c213d] hover:bg-[#7c213d] hover:text-white transition"
                >
                  Ro'yxatdan o'ting
                </a>
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
  )
}

export default Footer
"use client"

import Image from "next/image"
import AuthTriggerButton from "../../auth/AuthTriggerButton"
import { colors, radius, spacing } from "@/config/design-system"

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: colors.background.dark }}
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Azizam Market" width={44} height={44} />
              <span className="text-xl font-semibold text-white">
                Azizam Market
              </span>
            </div>

            <p
              className="mt-5 text-sm leading-7"
              style={{ color: colors.text.whiteSoft }}
            >
              Premium estetik yondashuv, mehr va qadrlash ruhida qurilgan
              zamonaviy kosmetika tajribasi.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Bo‘limlar
              </h3>

              <div
                className="mt-4 flex flex-col gap-3 text-sm"
                style={{ color: colors.text.whiteSoft }}
              >
                <a href="#about">Biz haqimizda</a>
                <a href="#products">Mahsulotlar</a>
                <a href="#achievements">Yutuqlar</a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Aloqa
              </h3>

              <div
                className="mt-4 flex flex-col gap-3 text-sm"
                style={{ color: colors.text.whiteSoft }}
              >
                <span>Instagram</span>
                <span>Telegram</span>
                <span>+998 00 000 00 00</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Hisob
              </h3>

              <div className="mt-4">
                <AuthTriggerButton
                  mode="register"
                  className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                  style={{
                    borderRadius: radius.full,
                    backgroundColor: colors.brand.primary,
                  }}
                >
                  Ro‘yxatdan o‘tish
                </AuthTriggerButton>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-14 border-t pt-6 text-sm"
          style={{
            borderColor: colors.border.whiteSoft,
            color: colors.text.whiteSoft,
          }}
        >
          © 2026 Azizam Market. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  )
}
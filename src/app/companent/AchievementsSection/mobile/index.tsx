"use client";

import { mobileSections } from "@/config/mobile-system/mobile-sections";
import MobileAchievementsShell from "./mobile-achievements-shell";
import useMobileAchievementsScroll from "./useMobileAchievementsScroll";

const mobileAchievements = [
  {
    id: 1,
    name: "Azizam Team",
    role: "Ishonch",
    description:
      "Bizning kuchimiz mahsulotning o‘zida emas, unga qo‘shilgan samimiyat va e’tiborda.",
    image: "/achievement-1.png",
  },
  {
    id: 2,
    name: "Go‘zallik",
    role: "Nafosat",
    description:
      "Har bir tanlovda nozik did, yengillik va qadrlash hissi sezilib turadi.",
    image: "/achievement-2.png",
  },
  {
    id: 3,
    name: "Mehr",
    role: "Qadriyat",
    description:
      "Azizam Market inson o‘zini aziz his qiladigan tajribani yaratishga intiladi.",
    image: "/achievement-3.png",
  },
];

export default function MobileAchievementsSection() {
  const activeIndex = useMobileAchievementsScroll({
    sectionId: "achievements",
    totalItems: mobileAchievements.length,
  });

  return (
    <section
      id="achievements"
      className="relative w-full bg-[#f5f1f3]"
      style={{
        minHeight: mobileSections.achievements.minHeight,
      }}
    >
      <div className="sticky top-0 flex h-[100svh] w-full items-center justify-center overflow-hidden px-4">
        <div className="absolute left-1/2 top-[12vh] z-30 w-full max-w-[360px] -translate-x-1/2 text-center">
          <h2 className="text-[42px] font-bold leading-none tracking-[-0.04em] text-[#cf2f8f]">
            Yutuqlar
          </h2>
        </div>

        <MobileAchievementsShell
          items={mobileAchievements}
          activeIndex={activeIndex}
        />
      </div>
    </section>
  );
}
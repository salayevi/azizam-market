"use client";

import { mobileSections } from "@/config/mobile-system/mobile-sections";
import MobileAchievementsShell from "./mobile-achievements-shell";
import useMobileAchievementsScroll from "./useMobileAchievementsScroll";

const mobileAchievements = [
  {
    id: 1,
    name: "Quvnoq Jamoa",
    role: "Jamoamiz",
    description:
      "Samimiy jamoa, iliq muhit va bir maqsad sari birlashgan ishonchli hamkorlik.",
    image: "/achievements/team-1.jpg",
    theme: {
      frame: "#f0069f",
      ribbon: "#f0069f",
      text: "#ffffff",
      muted: "rgba(255,255,255,0.92)",
    },
  },
  {
    id: 2,
    name: "Go‘zallik Ruhi",
    role: "Nafosat",
    description:
      "Har bir tanlovda nozik did, yengillik va qadrlash hissi sezilib turadi.",
    image: "/achievements/team-2.jpg",
    theme: {
      frame: "#f0069f",
      ribbon: "#f0069f",
      text: "#ffffff",
      muted: "rgba(255,255,255,0.92)",
    },
  },
  {
    id: 3,
    name: "Azizam Mehri",
    role: "Qadriyat",
    description:
      "Azizam Market inson o‘zini aziz his qiladigan tajribani yaratishga intiladi.",
    image: "/achievements/team-3.jpg",
    theme: {
      frame: "#f0069f",
      ribbon: "#f0069f",
      text: "#ffffff",
      muted: "rgba(255,255,255,0.92)",
    },
  },
];

export default function MobileAchievementsSection() {
  const scroll = useMobileAchievementsScroll({
    sectionId: "achievements",
    totalItems: mobileAchievements.length,
  });

  const titleIntroProgress = Math.min(scroll.sectionProgress / 0.12, 1);
  const titleOpacity = titleIntroProgress * (1 - scroll.titleFadeProgress);
  const titleY = (1 - titleIntroProgress) * 40 + scroll.titleFadeProgress * -26;
  const titleScale =
    0.92 + titleIntroProgress * 0.08 - scroll.titleFadeProgress * 0.04;

  const showCard = scroll.sectionProgress >= 0.22;

  return (
    <section
      id="achievements"
      className="relative w-full overflow-clip bg-[#f5f1f3]"
      style={{ minHeight: "320svh" }}
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center px-6 text-center"
          style={{ opacity: titleOpacity }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: mobileSections.achievements.frameMaxWidth,
              transform: `translateY(${titleY}px) scale(${titleScale})`,
              transformOrigin: "center center",
            }}
          >
            <h2 className="text-[clamp(34px,10vw,50px)] font-bold leading-none tracking-[-0.05em] text-[#cf2f8f]">
              Kompanya Yutuqlari
            </h2>
          </div>
        </div>

        {showCard ? (
          <MobileAchievementsShell
            items={mobileAchievements}
            currentIndex={scroll.currentIndex}
            nextIndex={scroll.nextIndex}
            blend={scroll.blend}
            frameRevealProgress={scroll.frameRevealProgress}
            ribbonRevealProgress={scroll.ribbonRevealProgress}
          />
        ) : null}
      </div>
    </section>
  );
}

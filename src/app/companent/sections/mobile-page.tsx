"use client";

import MobileAboutSection from "../about/mobile";
import MobileAchievementsSection from "../AchievementsSection/mobile";
import MobileHomeSection from "../home/mobile";
import MobileFooter from "../home/mobile/mobile-footer";
import MobileBottomNav from "../home/mobile/mobile-bottom-nav";
import MobileProductSection from "../product/mobile";
import MobileTopbar from "../home/mobile/mobile-topbar";

export default function MobilePage() {
  return (
      <main className="relative min-h-screen w-full bg-white">
        <MobileTopbar />
        <MobileBottomNav />

        <div>
          <MobileHomeSection />
          <MobileAboutSection />
          <MobileProductSection />
          <MobileAchievementsSection />
          <MobileFooter />
        </div>
      </main>
  );
}
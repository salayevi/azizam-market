import MobileAboutSection from "../about/mobile";
import MobileAchievementsSection from "../AchievementsSection/mobile";
import MobileHomeSection from "../home/mobile";
import MobileFooter from "../home/mobile/mobile-footer";
import MobileBottomNav from "../home/mobile/mobile-bottom-nav";
import MobileTopbar from "../home/mobile/mobile-topbar";
import MobileProductSection from "../product/mobile";

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
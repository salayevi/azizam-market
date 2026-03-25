import MobileHomeSection from "../home/mobile";
import MobileAboutSection from "../about/mobile";
import MobileProductSection from "../product/mobile";
import MobileAchievementsSection from "../AchievementsSection/mobile";

export default function MobilePage() {
  return (
    <main className="min-h-screen w-full bg-white">
      <div>
        <MobileHomeSection />
        <MobileAboutSection />
        <MobileProductSection />
        <MobileAchievementsSection />
      </div>
    </main>
  );
}
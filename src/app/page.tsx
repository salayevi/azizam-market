import About from "./companent/about";
import ProductsSection from "./companent/product";
import AchievementsSection from "./companent/AchievementsSection";
import HomeSection from "./companent/home";
import Footer from "./companent/home/Footer/footer";
export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <div>
        <HomeSection />
        <About />
        <ProductsSection />
        <div className="h-[20vh] bg-white" />
        <AchievementsSection />
        <Footer />
      </div>
    </main>
  );
}

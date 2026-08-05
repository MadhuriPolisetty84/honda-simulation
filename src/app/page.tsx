import HeroBanner from "@/components/HeroBanner/HeroBanner";
import StickyTabBar from "@/components/StickyTab/StickyTabBar";
import LatestNews from "@/components/LatestNews/LatestNews";
import Subscribe from "@/components/Subscribe/Subscribe";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <main>
      <HeroBanner />
      <StickyTabBar />
      <LatestNews />
      <Subscribe />
      <Footer />
    </main>
  );
}

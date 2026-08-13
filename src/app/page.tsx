import HeroBanner from "@/components/HeroBanner/HeroBanner";
import LatestNews from "@/components/LatestNews/LatestNews";
import Subscribe from "@/components/Subscribe/Subscribe";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <main>
      <HeroBanner />
      <LatestNews />
      <Subscribe />
      <Footer />
    </main>
  );
}

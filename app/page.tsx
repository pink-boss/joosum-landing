import HeroSection from "./components/sections/HeroSection";
import UsageSection from "./components/sections/UsageSection";
import FeatureSection from "./components/sections/FeatureSection";
import ReviewSection from "./components/sections/ReviewSection";
import DownloadSection from "./components/sections/DownloadSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <UsageSection />
      <FeatureSection />
      <ReviewSection />
      <DownloadSection />
    </div>
  );
}

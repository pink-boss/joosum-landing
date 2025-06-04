import HeroSection from "./components/sections/HeroSection";
import UsageSection from "./components/sections/UsageSection";
import FolderSection from "./components/sections/FolderSection";
import ReviewSection from "./components/sections/ReviewSection";
import DownloadSection from "./components/sections/DownloadSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <UsageSection />
      <FolderSection />
      <ReviewSection />
      <DownloadSection />
    </div>
  );
}

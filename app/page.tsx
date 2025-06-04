import { HeroSection } from "./components/sections/hero";
import { UsageSection } from "./components/sections/usage";
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

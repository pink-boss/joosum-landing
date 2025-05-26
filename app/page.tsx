import StatusBar from "./components/sections/StatusBar";
import Navigation from "./components/sections/Navigation";
import HeroSection from "./components/sections/HeroSection";
import UsageSection from "./components/sections/UsageSection";
import FolderSection from "./components/sections/FolderSection";
import ReviewSection from "./components/sections/ReviewSection";
import DownloadSection from "./components/sections/DownloadSection";
import Footer from "./components/sections/Footer";
import StructuredData from "./components/StructuredData";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <StructuredData />
      <StatusBar />
      <Navigation />

      <div className="w-full">
        <HeroSection />
        <UsageSection />
        <FolderSection />
        <ReviewSection />
        <DownloadSection />
        <Footer />
      </div>
    </main>
  );
}

import {
  DownloadSection,
  FeatureSection,
  HeroSection,
  LandingEvent,
  ReviewSection,
  UsageSection,
} from './components';

export default function Home() {
  return (
    <div className="w-full" data-testid="landing">
      <HeroSection />
      <UsageSection />
      <FeatureSection />
      <ReviewSection />
      <DownloadSection />
      <LandingEvent />
    </div>
  );
}

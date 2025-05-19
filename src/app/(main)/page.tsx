import Candidates from "@/src/app/(main)/_components/candidates";
import ElectionInformation from "@/src/app/(main)/_components/election-information";
import Faq from "@/src/app/(main)/_components/faq";
import Footer from "@/src/app/(main)/_components/footer";
import HeroSection from "@/src/app/(main)/_components/hero-section";
import Timeline from "@/src/app/(main)/_components/timeline";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Election Information */}
      <ElectionInformation />

      {/* Election Timeline */}
      <Timeline />

      {/* Candidates Section */}
      <Candidates />

      {/* FAQ Section */}
      <Faq />

      {/* Footer */}
      <Footer />
    </div>
  );
}

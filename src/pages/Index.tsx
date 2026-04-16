import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import RetailSection from "@/components/RetailSection";
import TechSection from "@/components/TechSection";
import EcosystemSection from "@/components/EcosystemSection";
import InvestorSection from "@/components/InvestorSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <EventsSection />
      <RetailSection />
      <EcosystemSection />
      <TechSection />
      <InvestorSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

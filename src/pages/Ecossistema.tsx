import Navbar from "@/components/Navbar";
import EcosystemSection from "@/components/EcosystemSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Ecossistema = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-16">
        <EcosystemSection />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
};

export default Ecossistema;

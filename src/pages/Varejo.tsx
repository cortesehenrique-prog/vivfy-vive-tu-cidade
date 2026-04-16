import Navbar from "@/components/Navbar";
import RetailSection from "@/components/RetailSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Varejo = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-16">
        <RetailSection />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
};

export default Varejo;

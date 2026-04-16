import Navbar from "@/components/Navbar";
import TechSection from "@/components/TechSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Tecnologia = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-16">
        <TechSection />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
};

export default Tecnologia;

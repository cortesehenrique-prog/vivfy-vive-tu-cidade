import Navbar from "@/components/Navbar";
import InvestorSection from "@/components/InvestorSection";
import Footer from "@/components/Footer";

const Investidor = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-16">
        <InvestorSection />
      </div>
      <Footer />
    </div>
  );
};

export default Investidor;

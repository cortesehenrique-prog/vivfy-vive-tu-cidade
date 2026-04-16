import Navbar from "@/components/Navbar";
import EventsSection from "@/components/EventsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Eventos = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-16">
        <EventsSection />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
};

export default Eventos;

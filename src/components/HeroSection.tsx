import heroBg from "@/assets/hero-bg.jpg";
import vivfyLogo from "@/assets/vivfy-logo.png";


const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Neon accents */}
      <div className="absolute top-1/4 left-0 w-full neon-line animate-pulse-glow" />
      <div className="absolute bottom-1/3 left-0 w-full neon-line animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-slide-up mb-8">
          <img
            src={vivfyLogo}
            alt="VIVFY Logo"
            className="mx-auto w-48 md:w-64 animate-float object-fill"
          />
        </div>

        <h1 className="animate-slide-up-delay-1 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          A infraestrutura tecnológica que{" "}
          <span style={{ color: "hsl(200, 100%, 70%)" }}>pulsa </span>
          <span className="gradient-text">com a sua cidade.</span>
        </h1>

        <p className="animate-slide-up-delay-2 mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Gestão de estoque, pagamentos resilientes e split automático. O VIVFY
          é o cérebro por trás dos seus eventos e varejo.
        </p>

        <div className="animate-slide-up-delay-3 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#solucao"
            className="gradient-cta px-8 py-4 rounded-lg font-heading font-semibold text-foreground text-lg transition-all hover:scale-105 hover:shadow-lg"
            style={{ boxShadow: "var(--glow-magenta)" }}
          >
            Conheça a Solução
          </a>
          <a
            href="#tecnologia"
            className="glass-card px-8 py-4 rounded-lg font-heading font-semibold text-foreground text-lg transition-all hover:scale-105"
          >
            Para Investidores
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;

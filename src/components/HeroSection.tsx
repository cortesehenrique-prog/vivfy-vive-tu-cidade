import heroBg from "@/assets/hero-bg.jpg";

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
      <div
        className="absolute bottom-1/3 left-0 w-full neon-line animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="animate-slide-up font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl mx-auto">
          A infraestrutura tecnológica que{" "}
          <span className="gradient-text">move o consumo</span>{" "}
          na sua cidade.
        </h1>

        <p className="animate-slide-up-delay-1 mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Conectamos o fluxo financeiro de eventos e varejo em um único
          ecossistema inteligente, resiliente e escalável.
        </p>

        <p className="animate-slide-up-delay-2 mt-4 text-sm md:text-base text-cyan-neon/80 max-w-2xl mx-auto font-medium">
          Cresça sem o peso de servidores fixos. Tecnologia que escala com a sua demanda.
        </p>

        <div className="animate-slide-up-delay-3 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#eventos"
            className="gradient-cta px-8 py-4 rounded-lg font-heading font-semibold text-foreground text-lg transition-all hover:scale-105 hover:shadow-lg"
            style={{ boxShadow: "var(--glow-magenta)" }}
          >
            Conheça a Solução
          </a>
          <a
            href="#investidor"
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

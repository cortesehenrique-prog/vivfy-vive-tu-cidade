const CTASection = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="glass-card rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Background glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-magenta/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-neon/10 rounded-full blur-[100px]" />

          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Pronto para <span className="gradient-text">escalar?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Seja parceiro do ecossistema que está transformando o comércio urbano.
              Adegas, eventos, farmácias — o VIVFY conecta tudo.
            </p>
            <a
              href="mailto:contato@vivfy.com"
              className="inline-block gradient-cta px-10 py-4 rounded-lg font-heading font-semibold text-foreground text-lg transition-all hover:scale-105"
              style={{ boxShadow: "var(--glow-magenta)" }}
            >
              Fale com a Gente
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

import { Store, PartyPopper, Pill, CreditCard } from "lucide-react";

const sectors = [
  { icon: PartyPopper, label: "Eventos", desc: "Ingressos, cashless, bar" },
  { icon: Store, label: "Adegas", desc: "PDV, estoque, delivery" },
  { icon: Pill, label: "Farmácias", desc: "Vendas, convênios" },
  { icon: CreditCard, label: "Varejo", desc: "Unificado, omnichannel" },
];

const EcosystemSection = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute top-0 left-0 w-full neon-line" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-heading font-semibold tracking-widest uppercase text-magenta">
            Ecossistema
          </span>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="gradient-text-cta">Vive Tu Cidade.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            O elo invisível que conecta o estoque do lojista à mão do cliente —
            seja no balcão, no online ou em grandes eventos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {sectors.map((s, i) => (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 mx-auto rounded-2xl glass-card flex items-center justify-center mb-3 group-hover:glow-magenta transition-all group-hover:scale-110">
                    <s.icon className="w-7 h-7 text-cyan-neon" />
                  </div>
                  <h4 className="font-heading font-semibold text-sm">
                    {s.label}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-neon/30 to-transparent" />
              <span className="text-xs font-heading font-semibold tracking-wider uppercase text-cyan-neon px-3">
                Unificados pelo VIVFY
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-neon/30 to-transparent" />
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground text-sm leading-relaxed max-w-lg mx-auto">
                Uma única conta, uma única experiência. O consumidor transita
                entre todos os setores parceiros com o mesmo saldo e a mesma
                identidade. Pagamento e experiência em uma única interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;

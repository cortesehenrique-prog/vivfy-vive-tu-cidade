import { Barcode, Split, ShieldCheck, CreditCard, Headphones, SlidersHorizontal } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const features = [
  {
    icon: Barcode,
    title: "Estoque Inteligente",
    description: "Leitura de código de barras direto na Smart POS. Controle em tempo real, sem papelada. Cada item rastreado da entrada à venda.",
  },
  {
    icon: Split,
    title: "Split de Pagamento",
    description: "Divisão automática de valores via API. O dinheiro cai na conta certa, na hora certa. Zero burocracia entre parceiros.",
  },
  {
    icon: ShieldCheck,
    title: "Resiliência Total",
    description: "Operação Offline-first e redundância de Gateway. Se um sistema cai, o VIVFY vira a chave e continua vendendo.",
  },
  {
    icon: CreditCard,
    title: "Maquininhas Subsidiadas*",
    description: "As maquininhas Smart POS são por nossa conta. Você foca no seu negócio, a gente cuida da infraestrutura de pagamento.",
  },
  {
    icon: Headphones,
    title: "Suporte 24h & Acompanhamento",
    description: "Time dedicado disponível 24 horas. Acompanhamento de perto de cada cliente, do onboarding à operação diária.",
  },
  {
    icon: SlidersHorizontal,
    title: "Painel 100% Customizável",
    description: "Dashboard feito sob medida para cada negócio. As necessidades de uma farmácia são diferentes de uma festa — seu painel reflete isso.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solucao" className="py-20 md:py-32 relative">
      <div className="absolute top-0 left-0 w-full neon-line" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-heading font-semibold tracking-widest uppercase text-cyan-neon">
            A Solução
          </span>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
            O <span className="gradient-text">VIVFY</span> resolve.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((f, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl gradient-accent flex items-center justify-center glow-cyan transition-shadow">
                  <f.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-1">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="glass-card rounded-2xl p-2 glow-cyan">
              <img
                src={dashboardMockup}
                alt="Dashboard VIVFY - Painel de controle inteligente"
                className="rounded-xl w-full"
                loading="lazy"
                width={1200}
                height={800}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-magenta/10 blur-3xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-cyan-neon/10 blur-3xl" />
          </div>
        </div>

        <p className="mt-8 text-[10px] text-muted-foreground/50 text-center">
          *Sujeito a análise de perfil comercial e volume de faturamento do estabelecimento.
        </p>
      </div>
    </section>
  );
};

export default SolutionSection;

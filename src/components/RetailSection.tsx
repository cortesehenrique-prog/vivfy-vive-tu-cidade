import { Barcode, WifiOff, SlidersHorizontal, TrendingUp, CreditCard, Headphones } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const features = [
  {
    icon: Barcode,
    title: "Estoque via Smart POS",
    description:
      "Leitura de código de barras direto na maquininha. Cada item rastreado da entrada à venda, sem papelada.",
  },
  {
    icon: WifiOff,
    title: "Modo Offline-First",
    description:
      "Venda agora, sincronize depois. O sistema nunca cai. Redundância de gateway garante operação 24/7.",
  },
  {
    icon: SlidersHorizontal,
    title: "Painel 100% Customizável",
    description:
      "Dashboard sob medida. As necessidades de uma farmácia são diferentes de uma adega — seu painel reflete isso.",
  },
  {
    icon: TrendingUp,
    title: "Inteligência de Big Data",
    description:
      "Previsão de demanda, análise de giro e sugestão automática de reposição. Seu estoque sempre otimizado.",
  },
  {
    icon: CreditCard,
    title: "Maquininhas Subsidiadas*",
    description:
      "Smart POS por nossa conta. Você foca no negócio, a gente cuida da infraestrutura de pagamento.",
  },
  {
    icon: Headphones,
    title: "Suporte 24h Dedicado",
    description:
      "Time disponível 24 horas. Acompanhamento de perto, do onboarding à operação diária.",
  },
];

const RetailSection = () => {
  return (
    <section id="varejo" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-heading font-semibold tracking-widest uppercase text-cyan-neon">
            VIVFY Varejo
          </span>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
            Sua adega com inteligência de{" "}
            <span className="gradient-text">Big Data.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Capital imobilizado em estoque parado e vendas perdidas por queda de
            sinal. O VIVFY transforma sua operação com tecnologia de ponta.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-accent flex items-center justify-center glow-cyan transition-shadow">
                  <f.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="glass-card rounded-2xl p-2 glow-cyan">
              <img
                src={dashboardMockup}
                alt="Dashboard VIVFY — Painel de controle inteligente para varejo"
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
          *Sujeito a análise de perfil comercial e volume de faturamento.
        </p>
      </div>
    </section>
  );
};

export default RetailSection;

import { AlertTriangle, Wifi, FileSpreadsheet, DollarSign } from "lucide-react";

const problems = [
  {
    icon: Wifi,
    title: "Falhas de Rede",
    description: "Eventos perdem vendas inteiras quando a internet cai. Maquininhas comuns simplesmente param.",
  },
  {
    icon: AlertTriangle,
    title: "Roubo de Estoque",
    description: "Controle manual por planilha gera brechas. Sem rastreio em tempo real, a margem evapora.",
  },
  {
    icon: FileSpreadsheet,
    title: "Planilhas Obsoletas",
    description: "Gestão por papel e Excel é lenta, imprecisa e impossibilita decisões em tempo real.",
  },
  {
    icon: DollarSign,
    title: "Burocracia no Repasse",
    description: "Splits manuais de pagamento entre parceiros geram atrasos, erros e desconfiança.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-heading font-semibold tracking-widest uppercase text-magenta">
            O Problema
          </span>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
            O modelo antigo está{" "}
            <span className="gradient-text-cta">custando caro.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Eventos perdem até <span className="text-foreground font-semibold">20% de margem</span> com
            falhas de rede, roubo de estoque manual e burocracia no repasse de pagamentos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 transition-all hover:scale-[1.03] hover:border-magenta/30 group"
            >
              <div className="w-12 h-12 rounded-lg gradient-cta flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow"
                style={{ boxShadow: "var(--glow-magenta)" }}>
                <p.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

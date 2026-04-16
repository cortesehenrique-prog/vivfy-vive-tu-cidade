import { Cloud, Lock, Zap, Server, ShieldCheck, BarChart3 } from "lucide-react";

const techItems = [
  {
    icon: Cloud,
    title: "100% Serverless no GCP",
    description:
      "Custo operacional que tende a zero quando não há transações. Escalamos de 10 a 10.000 vendas simultâneas sem travar.",
  },
  {
    icon: ShieldCheck,
    title: "Alta Disponibilidade (HA)",
    description:
      "Redundância de Gateways Multi-BaaS. Se um banco oscila, o VIVFY vira a chave sozinho. Zero downtime.",
  },
  {
    icon: Lock,
    title: "Segurança Bancária",
    description:
      "Criptografia ponta a ponta, compliance PCI-DSS e banco de dados com HA. Seus dados tão seguros quanto em um banco.",
  },
  {
    icon: Zap,
    title: "Latência Ultra-Baixa",
    description:
      "Infraestrutura distribuída regionalmente. Transações processadas em milissegundos, mesmo em picos de demanda.",
  },
  {
    icon: Server,
    title: "Cloud Native",
    description:
      "Microserviços containerizados. Deploy contínuo, observabilidade total e escalabilidade infinita.",
  },
  {
    icon: BarChart3,
    title: "Observabilidade Total",
    description:
      "Monitoramento em tempo real de cada microserviço. Logs, métricas e tracing distribuído para diagnóstico instantâneo.",
  },
];

const ComparisonTable = () => (
  <div className="mt-16 max-w-3xl mx-auto">
    <h3 className="font-heading text-2xl font-bold text-center mb-8">
      VIVFY <span className="gradient-text">vs.</span> Tradicional
    </h3>
    <div className="glass-card rounded-2xl overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border/50">
            <th className="p-4 text-left text-muted-foreground font-medium">
              Critério
            </th>
            <th className="p-4 text-center font-heading font-semibold text-cyan-neon">
              VIVFY
            </th>
            <th className="p-4 text-center text-muted-foreground font-medium">
              Tradicional
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Custo de servidor", "Paga pelo uso", "Fixo + ocioso"],
            ["Queda de rede", "Offline-first", "Para tudo"],
            ["Escalabilidade", "Infinita (Cloud)", "Limitada"],
            ["Deploy", "Contínuo, zero downtime", "Manual, com risco"],
            ["Split de pagamento", "Automático via API", "Planilha manual"],
            ["Tempo de setup", "Minutos", "Semanas"],
          ].map(([criteria, vivfy, trad], i) => (
            <tr key={i} className="border-b border-border/30 last:border-0">
              <td className="p-4 text-foreground font-medium">{criteria}</td>
              <td className="p-4 text-center text-cyan-neon font-semibold">
                {vivfy}
              </td>
              <td className="p-4 text-center text-muted-foreground">{trad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const TechSection = () => {
  return (
    <section id="tecnologia" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full bg-cyan-neon" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-cyan-neon" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-cyan-neon" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-heading font-semibold tracking-widest uppercase text-cyan-neon">
            Tecnologia
          </span>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
            Engenharia de Elite.{" "}
            <span className="gradient-text">Performance para Escalar.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Infraestrutura 100% serverless no Google Cloud Platform. Não somos
            locais — somos uma solução global com eficiência de fintech.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {techItems.map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 transition-all hover:scale-[1.02] hover:border-cyan-neon/30 group"
            >
              <div className="w-12 h-12 rounded-lg bg-cyan-neon/10 flex items-center justify-center mb-4 group-hover:glow-cyan transition-shadow">
                <item.icon className="w-6 h-6 text-cyan-neon" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <ComparisonTable />
      </div>
    </section>
  );
};

export default TechSection;

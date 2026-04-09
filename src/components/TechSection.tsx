import { Cloud, Lock, Zap, Server } from "lucide-react";

const techItems = [
  {
    icon: Cloud,
    title: "Serverless no GCP",
    description: "Custo fixo quase zero. Escalamos de 10 a 10.000 vendas simultâneas sem travar. Paga-se pelo uso.",
  },
  {
    icon: Lock,
    title: "Segurança Bancária",
    description: "Banco de dados com Alta Disponibilidade (HA), criptografia de ponta a ponta e compliance PCI-DSS.",
  },
  {
    icon: Zap,
    title: "Latência Ultra-Baixa",
    description: "Infraestrutura distribuída regionalmente. Transações processadas em milissegundos, mesmo em picos.",
  },
  {
    icon: Server,
    title: "Cloud Native",
    description: "Arquitetura de microserviços containerizados. Deploy contínuo, zero downtime, observabilidade total.",
  },
];

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
            Para Investidores
          </span>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
            Tecnologia de{" "}
            <span className="gradient-text">classe mundial.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Infraestrutura que escala com Google Cloud Platform. Não somos locais —
            somos uma solução global que opera com a eficiência de uma fintech.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {techItems.map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-8 transition-all hover:scale-[1.02] hover:border-cyan-neon/30 group"
            >
              <div className="w-12 h-12 rounded-lg bg-cyan-neon/10 flex items-center justify-center mb-5 group-hover:glow-cyan transition-shadow">
                <item.icon className="w-6 h-6 text-cyan-neon" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;

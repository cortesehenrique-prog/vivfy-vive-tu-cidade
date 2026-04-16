import { Ticket, Split, ShieldCheck, WifiOff, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Ticket,
    title: "Check-in Veloz & Cashless",
    description:
      "Ingresso digital com validação instantânea. Pagamento cashless integrado ao ecossistema — sem filas, sem dinheiro físico.",
  },
  {
    icon: Split,
    title: "Split Automático de Lucros",
    description:
      "Divisão de receita em tempo real via API. Organizadores, artistas e fornecedores recebem automaticamente. Sem planilhas.",
  },
  {
    icon: ShieldCheck,
    title: "Controle Cego & Auditoria",
    description:
      "Auditoria em tempo real de cada transação. Controle cego que elimina desvios e garante total transparência financeira.",
  },
  {
    icon: WifiOff,
    title: "Resiliência Offline",
    description:
      "Se a internet cai, o VIVFY continua vendendo. Modo offline-first com sincronização automática quando a rede volta.",
  },
  {
    icon: BarChart3,
    title: "Analytics em Tempo Real",
    description:
      "Dashboard ao vivo com vendas por produto, horário e ponto de venda. Decisões instantâneas baseadas em dados.",
  },
  {
    icon: Users,
    title: "Gestão Multi-Evento",
    description:
      "Gerencie múltiplos eventos simultâneos com equipes diferentes. Permissões granulares e relatórios individualizados.",
  },
];

const EventsSection = () => {
  return (
    <section id="eventos" className="py-20 md:py-32 relative">
      <div className="absolute top-0 left-0 w-full neon-line" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-heading font-semibold tracking-widest uppercase text-magenta">
            VIVFY Eventos
          </span>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
            Pare de deixar{" "}
            <span className="gradient-text-cta">dinheiro na mesa.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Sistemas arcaicos causam perdas de até{" "}
            <span className="text-foreground font-semibold">15%</span> por
            desvios e falhas de rede. O VIVFY elimina cada uma dessas brechas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 transition-all hover:scale-[1.03] hover:border-magenta/30 group"
            >
              <div
                className="w-12 h-12 rounded-lg gradient-cta flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow"
                style={{ boxShadow: "var(--glow-magenta)" }}
              >
                <f.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;

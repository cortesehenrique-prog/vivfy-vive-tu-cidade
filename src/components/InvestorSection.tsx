import { DollarSign, TrendingUp, PieChart, ArrowRight } from "lucide-react";
import { useState } from "react";

const revenueStreams = [
  {
    icon: DollarSign,
    title: "Take Rate",
    description:
      "Taxa sobre cada transação processada. Quanto mais volume, mais receita recorrente e previsível.",
  },
  {
    icon: PieChart,
    title: "Licenciamento SaaS",
    description:
      "Modelo de assinatura para grandes redes e franquias. Receita fixa mensal com contratos de longo prazo.",
  },
  {
    icon: TrendingUp,
    title: "Float Financeiro",
    description:
      "Rendimento sobre o saldo em trânsito entre transação e liquidação. Margem adicional sem custo operacional.",
  },
];

const InvestorSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    setSubmitted(true);
  };

  return (
    <section id="investidor" className="py-20 md:py-32 relative">
      <div className="absolute top-0 left-0 w-full neon-line" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-heading font-semibold tracking-widest uppercase text-magenta">
            Investidor
          </span>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl lg:text-5xl font-bold">
            Tese de Negócio com{" "}
            <span className="gradient-text-cta">Margem Escalável.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Nossa margem líquida aumenta conforme o volume cresce, pois
            eliminamos o custo de servidores ociosos. Eficiência de capital real.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {revenueStreams.map((r, i) => (
            <div
              key={i}
              className="glass-card rounded-xl p-6 text-center transition-all hover:scale-[1.03] hover:border-magenta/30 group"
            >
              <div className="w-14 h-14 mx-auto rounded-xl gradient-cta flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow"
                style={{ boxShadow: "var(--glow-magenta)" }}
              >
                <r.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">
                {r.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pitch Deck Request Form */}
        <div className="max-w-lg mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-magenta/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-neon/10 rounded-full blur-[80px]" />

            <div className="relative z-10">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto rounded-full gradient-cta flex items-center justify-center mb-4">
                    <ArrowRight className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-2">
                    Recebemos seu contato!
                  </h3>
                  <p className="text-muted-foreground">
                    Nossa equipe entrará em contato em breve com o acesso ao Pitch
                    Deck e Data Room.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-heading text-2xl font-bold text-center mb-2">
                    Solicitar Pitch Deck
                  </h3>
                  <p className="text-muted-foreground text-sm text-center mb-6">
                    Preencha seus dados para acessar nossos números e projeções.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="Nome completo"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                    <input
                      type="email"
                      placeholder="E-mail"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                    <input
                      type="tel"
                      placeholder="Telefone / WhatsApp"
                      required
                      maxLength={20}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                    <button
                      type="submit"
                      className="w-full gradient-cta px-6 py-3 rounded-lg font-heading font-semibold text-foreground transition-all hover:scale-105"
                      style={{ boxShadow: "var(--glow-magenta)" }}
                    >
                      Solicitar Acesso
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;

import { motion } from "framer-motion";
import { Award, Building2, Clock, HeartHandshake } from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "Credibilidade",
    desc: "Mais de 15 anos entregando projetos com excelência e transparência total.",
  },
  {
    icon: Building2,
    title: "Autoridade Técnica",
    desc: "Equipe multidisciplinar com engenheiros especializados em construção residencial de alto padrão.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Humanizado",
    desc: "Cada cliente é único. Nosso atendimento é personalizado e próximo, com comunicação constante.",
  },
  {
    icon: Clock,
    title: "Engenheiro Dedicado",
    desc: "Um engenheiro exclusivo acompanha sua obra presencialmente e está sempre disponível para você.",
  },
];

const CredibilitySection = () => {
  return (
    <section id="sobre" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Por que a Sorg?
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 text-foreground">
            Excelência que você{" "}
            <span className="italic">pode confiar</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-6 p-8 rounded-xl bg-background border border-border/60 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shrink-0">
                <p.icon size={26} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;

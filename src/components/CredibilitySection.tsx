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
    <section id="sobre" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Por que a Sorg?
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 text-foreground">
            Excelência que você{" "}
            <span className="italic text-accent">pode confiar</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex gap-5 p-7 rounded-2xl bg-secondary border border-transparent hover:border-accent/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:shadow-md transition-all duration-300">
                <p.icon size={24} className="text-accent group-hover:text-primary-foreground transition-colors" />
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

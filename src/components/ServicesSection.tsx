import { motion } from "framer-motion";
import { ClipboardCheck, HardHat, ShieldCheck, Wallet, Users, FileCheck } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Planejamento Completo",
    desc: "Cronograma detalhado, orçamento preciso e planejamento estratégico de cada etapa da obra.",
  },
  {
    icon: HardHat,
    title: "Execução & Supervisão",
    desc: "Acompanhamento diário da obra com engenheiro responsável dedicado ao seu projeto.",
  },
  {
    icon: Wallet,
    title: "Gestão Financeira",
    desc: "Controle rigoroso dos custos, pagamentos e fluxo de caixa da sua obra.",
  },
  {
    icon: ShieldCheck,
    title: "Qualidade Garantida",
    desc: "Padrões rigorosos de qualidade com materiais selecionados e mão de obra qualificada.",
  },
  {
    icon: Users,
    title: "Equipe Exclusiva",
    desc: "Time de profissionais experientes e dedicados exclusivamente ao seu projeto.",
  },
  {
    icon: FileCheck,
    title: "Documentação & Laudos",
    desc: "Toda a documentação técnica, licenças e laudos necessários gerenciados por nós.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 text-foreground">
            Gerenciamento completo,{" "}
            <span className="italic">do início ao fim</span>
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Você já tem o projeto da sua casa pronto. Agora, deixe que a Sorg
            Engenharia transforme cada desenho em realidade com excelência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass-card rounded-xl p-8 hover:shadow-xl transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

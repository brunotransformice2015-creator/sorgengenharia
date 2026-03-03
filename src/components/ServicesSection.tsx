import { motion } from "framer-motion";
import { ClipboardCheck, HardHat, ShieldCheck, Wallet, Users, FileCheck } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Planejamento Completo",
    desc: "Cronograma detalhado, orçamento preciso e planejamento estratégico de cada etapa da obra.",
    num: "01",
  },
  {
    icon: HardHat,
    title: "Execução & Supervisão",
    desc: "Acompanhamento diário da obra com engenheiro responsável dedicado ao seu projeto.",
    num: "02",
  },
  {
    icon: Wallet,
    title: "Gestão Financeira",
    desc: "Controle rigoroso dos custos, pagamentos e fluxo de caixa da sua obra.",
    num: "03",
  },
  {
    icon: ShieldCheck,
    title: "Qualidade Garantida",
    desc: "Padrões rigorosos de qualidade com materiais selecionados e mão de obra qualificada.",
    num: "04",
  },
  {
    icon: Users,
    title: "Equipe Exclusiva",
    desc: "Time de profissionais experientes e dedicados exclusivamente ao seu projeto.",
    num: "05",
  },
  {
    icon: FileCheck,
    title: "Documentação & Laudos",
    desc: "Toda a documentação técnica, licenças e laudos necessários gerenciados por nós.",
    num: "06",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">
              Nossos Serviços
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 text-foreground leading-tight">
              Gerenciamento completo,{" "}
              <span className="italic text-accent">do início ao fim</span>
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              Você já tem o projeto da sua casa pronto. Agora, deixe que a Sorg
              Engenharia transforme cada desenho em realidade com excelência.
            </p>
            <div className="hidden lg:block mt-8 w-16 h-1 bg-accent/30 rounded-full" />
          </motion.div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative bg-secondary rounded-2xl p-7 group hover:bg-primary hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="absolute top-5 right-6 text-4xl font-display font-bold text-border/60 group-hover:text-primary-foreground/10 transition-colors">
                  {s.num}
                </span>
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-primary-foreground/20 transition-colors">
                  <s.icon size={22} className="text-accent group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-2 group-hover:text-primary-foreground transition-colors">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-primary-foreground/70 transition-colors">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

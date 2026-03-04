import { motion } from "framer-motion";
import { TrendingUp, Package, Wrench } from "lucide-react";

const otherServices = [
  {
    icon: TrendingUp,
    title: "Investimentos Imobiliários",
    desc: "Análise e execução de empreendimentos voltados a investimentos imobiliários, com estudo de viabilidade e retorno.",
    num: "01",
  },
  {
    icon: Package,
    title: "Pacote Completo",
    desc: "Material, mão de obra e gerenciamento — tudo incluso em um único pacote para sua total tranquilidade.",
    num: "02",
  },
  {
    icon: Wrench,
    title: "Mão de Obra & Gerenciamento",
    desc: "Pacote de mão de obra e gerenciamento com materiais à parte, a ser avaliado conforme a necessidade do projeto.",
    num: "03",
  },
];

const OtherServicesSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Mais Soluções
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 text-foreground leading-tight">
            Outros serviços <span className="italic text-accent">prestados</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
            Além do gerenciamento de obras, oferecemos soluções completas para diferentes necessidades.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {otherServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative bg-background rounded-2xl p-8 group hover:bg-primary hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="absolute top-5 right-6 text-5xl font-display font-bold text-border/40 group-hover:text-primary-foreground/10 transition-colors">
                {s.num}
              </span>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-primary-foreground/20 transition-colors">
                <s.icon size={24} className="text-accent group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary-foreground transition-colors">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-primary-foreground/70 transition-colors">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherServicesSection;

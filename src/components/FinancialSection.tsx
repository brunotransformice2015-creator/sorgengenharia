import { motion } from "framer-motion";
import { Landmark, CheckCircle, TrendingUp, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WA_LINK = "https://wa.me/5511999231384?text=Quero%20fazer%20um%20or%C3%A7amento";

const benefits = [
  { icon: CheckCircle, text: "Fácil aprovação de limite" },
  { icon: TrendingUp, text: "Taxas competitivas do mercado" },
  { icon: Landmark, text: "32+ instituições parceiras" },
  { icon: ShieldCheck, text: "Gerenciamento total do capital" },
];

const FinancialSection = () => {
  return (
    <section id="financiamento" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">
              Financiamento
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 text-foreground leading-tight">
              Mais de{" "}
              <span className="text-gradient">32 parceiros financeiros</span>{" "}
              para realizar sua obra
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Encontramos a melhor opção de crédito para o seu perfil. Com
              aprovação facilitada e condições exclusivas, sua obra não precisa
              esperar. Nós gerenciamos todo o fluxo financeiro para que você
              tenha total tranquilidade.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {benefits.map((b) => (
                <div key={b.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <b.icon size={20} className="text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{b.text}</span>
                </div>
              ))}
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-10 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-sm"
            >
              <FaWhatsapp size={18} />
              Simular Financiamento
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-primary rounded-2xl p-10 md:p-14">
              <div className="text-center">
                <div className="font-display text-6xl md:text-7xl font-bold text-primary-foreground">
                  32<span className="text-gold">+</span>
                </div>
                <p className="text-primary-foreground/70 mt-3 text-lg">Parcerias Financeiras</p>
                <div className="w-16 h-px bg-primary-foreground/20 mx-auto my-8" />
                <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-sm mx-auto">
                  Trabalhamos com as principais instituições financeiras do Brasil para garantir as
                  melhores condições de crédito para a sua obra.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/20 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinancialSection;

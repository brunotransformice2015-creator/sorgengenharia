import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import heroImg from "@/assets/hero-construction.jpg";

const WA_LINK = "https://wa.me/5511999231384?text=Quero%20fazer%20um%20or%C3%A7amento";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Construção residencial de alto padrão"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/20" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-12 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mb-8"
        >
          <h1 className="font-display text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-primary-foreground uppercase">
            Sua casa dos
            <br />
            sonhos, do projeto
            <br />
            <span className="italic font-normal text-gold">À REALIDADE.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
        >
          <p className="max-w-md text-primary-foreground/60 text-base leading-relaxed font-light">
            Engenharia de excelência com atendimento exclusivo. 
            Do alicerce à entrega das chaves, cada detalhe sob controle.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-primary-foreground text-foreground font-medium px-8 py-4 rounded-full text-sm tracking-wide hover:bg-accent hover:text-primary-foreground transition-all duration-300"
            >
              <FaWhatsapp size={18} />
              Solicitar Orçamento
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 text-primary-foreground/70 font-medium text-sm hover:text-primary-foreground transition-colors"
            >
              Ver Projetos
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="border-t border-primary-foreground/10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { num: "150+", label: "Obras Entregues" },
            { num: "32+", label: "Parceiros Financeiros" },
            { num: "98%", label: "Clientes Satisfeitos" },
            { num: "15+", label: "Anos de Experiência" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl md:text-4xl font-light text-primary-foreground tracking-tight">
                {stat.num}
              </div>
              <div className="text-xs text-primary-foreground/40 mt-1 tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-primary-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

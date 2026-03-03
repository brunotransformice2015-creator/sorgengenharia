import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Construção residencial de alto padrão"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-12 pt-40">
        {/* Top tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-gold/90 text-xs tracking-[0.3em] uppercase font-medium border border-gold/20 px-4 py-2 rounded-full backdrop-blur-sm bg-primary-foreground/5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Gerenciamento Completo de Obras
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl mb-8"
        >
          <h1 className="font-display text-5xl md:text-6xl lg:text-[5.5rem] font-light leading-[1.05] tracking-tight text-primary-foreground">
            Sua casa dos
            <br />
            sonhos, do projeto
            <br />
            <span className="italic font-normal text-gold">à realidade.</span>
          </h1>
        </motion.div>

        {/* Subtext + CTA row */}
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
              href="#contato"
              className="group inline-flex items-center gap-3 bg-primary-foreground text-foreground font-medium px-8 py-4 rounded-full text-sm tracking-wide hover:bg-gold hover:text-foreground transition-all duration-300"
            >
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

        {/* Stats bar */}
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

      {/* Scroll indicator */}
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

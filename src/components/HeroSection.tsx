import { motion } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Construção residencial de alto padrão"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-overlay)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-6">
            Gerenciamento Completo de Obras
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary-foreground">
            Transformamos seu projeto em{" "}
            <span className="italic">realidade</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-10 text-primary-foreground/80 font-light">
            Do alicerce à entrega das chaves, cuidamos de cada detalhe da sua
            obra com engenharia de excelência e atendimento exclusivo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="bg-primary-foreground text-primary font-semibold px-8 py-4 rounded-lg text-center hover:opacity-90 transition-opacity text-sm"
            >
              Solicitar Orçamento
            </a>
            <a
              href="#projetos"
              className="border border-primary-foreground/30 text-primary-foreground font-semibold px-8 py-4 rounded-lg text-center hover:bg-primary-foreground/10 transition-colors text-sm flex items-center justify-center gap-2"
            >
              <Play size={16} /> Ver Projetos
            </a>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-primary-foreground/20"
        >
          {[
            { num: "150+", label: "Obras Entregues" },
            { num: "32+", label: "Parceiros Financeiros" },
            { num: "98%", label: "Clientes Satisfeitos" },
            { num: "15+", label: "Anos de Experiência" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:px-8">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                {stat.num}
              </div>
              <div className="text-sm text-primary-foreground/60 mt-1">
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
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={20} className="text-primary-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

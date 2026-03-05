import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import heroVideo from "../assets/videodohero.mp4";
import heroFallback from "../assets/hero-construction.jpg";

const WA_LINK = "https://wa.me/5511942132670?text=Quero%20fazer%20um%20or%C3%A7amento";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={heroFallback}
          className="w-full h-full object-cover pointer-events-none select-none"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-foreground/10" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pb-16 sm:pb-20 pt-20 sm:pt-24 md:pt-28 flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="max-w-3xl mb-8 sm:mb-10 text-center md:text-left"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase shadow-md shadow-black/30 mb-4">
            Gerenciamento de Obras
          </span>
          <h1 className="font-display text-6xl sm:text-6xl md:text-5xl lg:text-[3.5rem] xl:text-[4.5rem] font-bold leading-[1.1] tracking-tight text-primary-foreground uppercase">
            Do projeto
            <br />
            à entrega das chaves.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 sm:gap-8 mb-10 sm:mb-12"
        >
          <p className="max-w-md text-primary-foreground/70 text-sm sm:text-base leading-relaxed font-light text-center md:text-left mx-auto md:mx-0">
            Engenharia de excelência com atendimento exclusivo. 
            Do alicerce à entrega das chaves, cada detalhe sob controle.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start gap-4 sm:gap-4 mt-4 sm:mt-0">
            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 bg-primary-foreground text-foreground font-medium px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm tracking-wide hover:bg-accent hover:text-primary-foreground transition-all duration-300 shadow-xl"
            >
              <FaWhatsapp size={18} />
              Solicitar Orçamento
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 text-primary-foreground/70 font-medium text-sm hover:text-primary-foreground transition-colors"
            >
              Ver Projetos
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-auto border-t border-primary-foreground/10 pt-6 sm:pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center"
        >
          {[
            { num: "150+", label: "Obras Entregues" },
            { num: "32+", label: "Parceiros Financeiros" },
            { num: "100%", label: "Clientes Satisfeitos" },
            { num: "15+", label: "Anos de Experiência" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.1 }}
              >
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-primary-foreground tracking-tight text-center">
                {stat.num}
              </div>
                <div className="text-[10px] sm:text-xs text-primary-foreground/40 mt-1 tracking-wider uppercase text-center">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-primary-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

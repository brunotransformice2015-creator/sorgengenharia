import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/5 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">
            Comece Agora
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-primary-foreground leading-tight">
            Pronto para transformar seu projeto em realidade?
          </h2>
          <p className="text-primary-foreground/70 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            Fale com nosso time de especialistas. Analisamos seu projeto sem
            compromisso e apresentamos a melhor solução para sua obra.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-foreground text-primary font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-sm inline-flex items-center justify-center gap-2"
            >
              Falar no WhatsApp <ArrowRight size={16} />
            </a>
            <a
              href="tel:+5500000000000"
              className="border border-primary-foreground/30 text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:bg-primary-foreground/10 transition-colors text-sm"
            >
              Ligar Agora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

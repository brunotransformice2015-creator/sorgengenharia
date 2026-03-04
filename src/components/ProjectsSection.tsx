import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { img: project1, title: "Casa Quinta das Paineiras", area: "740m²", style: "Minimalista" },
  { img: project2, title: "Casa de Madeira", area: "80m² a 490m²", style: "Rústico" },
  { img: project3, title: "Obra UPA", area: "3.000m²", style: "Hospitalar" },
  { img: project4, title: "Museu da Polícia Militar de SP", area: "7.300m²", style: "Reforma Completa" },
];

const ProjectsSection = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % projects.length);
  const prev = () => setActive((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projetos" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-widest uppercase">
            Portfólio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-foreground">
            Projetos que <span className="italic text-accent">inspiram</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Cada obra é única. Confira alguns dos nossos projetos residenciais entregues com excelência.
          </p>
        </motion.div>

        {/* Main showcase */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[16/8] group"
          >
            <img
              src={projects[active].img}
              alt={projects[active].title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
              <motion.div
                key={`info-${active}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground">
                  {projects[active].title}
                </h3>
                <div className="flex flex-wrap gap-3 mt-3">
                  <span className="text-sm text-primary-foreground/90 bg-primary-foreground/15 px-4 py-1.5 rounded-full backdrop-blur-md border border-primary-foreground/10">
                    {projects[active].area}
                  </span>
                  <span className="text-sm text-primary-foreground/90 bg-primary-foreground/15 px-4 py-1.5 rounded-full backdrop-blur-md border border-primary-foreground/10">
                    {projects[active].style}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-3 md:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 md:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-3 md:gap-4 mt-6 md:mt-8">
          {projects.map((p, i) => (
            <motion.button
              key={p.title}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative rounded-xl md:rounded-2xl overflow-hidden w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-20 lg:w-36 lg:h-24 transition-all duration-300 ${
                i === active
                  ? "ring-2 ring-accent ring-offset-2 ring-offset-secondary shadow-lg"
                  : "opacity-50 hover:opacity-80"
              }`}
            >
              <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
              {i === active && (
                <motion.div
                  layoutId="activeThumb"
                  className="absolute inset-0 bg-accent/20 border-2 border-accent rounded-xl md:rounded-2xl"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-4">
          <span className="text-muted-foreground text-sm font-medium">
            {active + 1} <span className="text-border">/ </span>{projects.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

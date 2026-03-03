import { motion } from "framer-motion";
import { useState } from "react";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { img: project1, title: "Residência Alphaville", area: "480m²", style: "Contemporâneo" },
  { img: project2, title: "Casa Jardins", area: "620m²", style: "Moderno" },
  { img: project3, title: "Residência Serra", area: "350m²", style: "Rústico Moderno" },
  { img: project4, title: "Villa Horizonte", area: "550m²", style: "Minimalista" },
];

const ProjectsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="projetos" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">
              Portfólio
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
              Projetos que <span className="italic text-accent">inspiram</span>
            </h2>
          </div>
          <p className="text-muted-foreground mt-4 md:mt-0 max-w-md text-sm leading-relaxed">
            Cada obra é única. Confira alguns dos nossos projetos residenciais entregues com excelência.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-8 relative rounded-2xl overflow-hidden aspect-[16/10] group"
          >
            <img
              src={projects[active].img}
              alt={projects[active].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold text-primary-foreground">
                  {projects[active].title}
                </h3>
                <div className="flex gap-4 mt-2">
                  <span className="text-sm text-primary-foreground/80 bg-primary-foreground/10 px-3 py-1 rounded-full backdrop-blur-sm">
                    {projects[active].area}
                  </span>
                  <span className="text-sm text-primary-foreground/80 bg-primary-foreground/10 px-3 py-1 rounded-full backdrop-blur-sm">
                    {projects[active].style}
                  </span>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-1 text-primary-foreground/60 text-xs">
                <span>{active + 1}</span>
                <span>/</span>
                <span>{projects.length}</span>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3">
            {projects.map((p, i) => (
              <button
                key={p.title}
                onClick={() => setActive(i)}
                className={`relative rounded-xl overflow-hidden aspect-[16/10] lg:aspect-[16/7] transition-all duration-300 ${
                  i === active
                    ? "ring-2 ring-accent ring-offset-2 ring-offset-background opacity-100 scale-[1.02]"
                    : "opacity-60 hover:opacity-90"
                }`}
              >
                <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 ${i === active ? 'bg-accent/10' : 'bg-foreground/30'} transition-colors`} />
                <span className="absolute bottom-2 left-3 text-xs font-semibold text-primary-foreground drop-shadow-md">
                  {p.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

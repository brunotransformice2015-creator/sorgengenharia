import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import obraupa2 from "@/assets/obraupa2.jpeg";
import obraupa3 from "@/assets/obraupa3.jpeg";
import obraupa4 from "@/assets/obraupa4.jpeg";
import obraupa5 from "@/assets/obraupa5.jpeg";
import casaQuinta2 from "@/assets/casaquintadaspaineiras2.jpeg";
import casaQuinta3 from "@/assets/casaquintadaspaineiras3.jpeg";
import casaQuinta4 from "@/assets/casaquintadaspaineiras4.jpeg";
import casaQuinta5 from "@/assets/casaquintadaspaineiras5.jpeg";
import casaMadeira2 from "@/assets/casademadeira2.jpeg";
import casaMadeira3 from "@/assets/casademadeira3.jpeg";
import casaMadeira4 from "@/assets/casademadeira4.jpeg";
import casaMadeira5 from "@/assets/casademadeira5.jpeg";
import museu2 from "@/assets/museupmsp2.jpeg";
import museu3 from "@/assets/museupmsp3.jpeg";
import museu4 from "@/assets/museupmsp4.jpeg";
import museu5 from "@/assets/museupmsp5.jpeg";

const projects = [
  {
    img: project1,
    title: "Casa Quinta das Paineiras",
    area: "740m²",
    style: "Minimalista",
    gallery: [project1, casaQuinta2, casaQuinta3, casaQuinta4, casaQuinta5],
  },
  {
    img: project2,
    title: "Casa de Madeira",
    area: "80m² a 490m²",
    style: "Rústico",
    gallery: [project2, casaMadeira2, casaMadeira3, casaMadeira4, casaMadeira5],
  },
  {
    img: project3,
    title: "Obra UPA",
    area: "3.000m²",
    style: "Hospitalar",
    gallery: [project3, obraupa2, obraupa3, obraupa4, obraupa5],
  },
  {
    img: project4,
    title: "Museu da Polícia Militar de SP",
    area: "7.300m²",
    style: "Reforma Completa",
    gallery: [project4, museu2, museu3, museu4, museu5],
  },
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const next = () => {
    setActiveProject((prev) => {
      const nextProject = (prev + 1) % projects.length;
      setActiveImageIndex(0);
      return nextProject;
    });
  };

  const prev = () => {
    setActiveProject((prev) => {
      const nextProject = (prev - 1 + projects.length) % projects.length;
      setActiveImageIndex(0);
      return nextProject;
    });
  };

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
            Cada obra é única. Confira alguns dos nossos projetos de Gerenciamento de Obras entregues com excelência.
          </p>
        </motion.div>

        {/* Main showcase */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden aspect-[16/9] group"
          >
            <img
              src={projects[activeProject].gallery[activeImageIndex] ?? projects[activeProject].img}
              alt={projects[activeProject].title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10">
              <motion.div
                key={`info-${activeProject}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground">
                  {projects[activeProject].title}
                </h3>
                <div className="flex flex-wrap gap-3 mt-3">
                  <span className="text-sm text-primary-foreground/90 bg-primary-foreground/15 px-4 py-1.5 rounded-full backdrop-blur-md border border-primary-foreground/10">
                    {projects[activeProject].area}
                  </span>
                  <span className="text-sm text-primary-foreground/90 bg-primary-foreground/15 px-4 py-1.5 rounded-full backdrop-blur-md border border-primary-foreground/10">
                    {projects[activeProject].style}
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

        {/* Galeria do projeto ativo */}
        {projects[activeProject].gallery && (
          <div className="max-w-5xl mx-auto mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {projects[activeProject].gallery.map((img, index) => (
              <button
                type="button"
                onClick={() => setActiveImageIndex(index)}
                key={`${projects[activeProject].title}-galeria-${index}`}
                className={`relative overflow-hidden rounded-xl bg-foreground/5 transition-all duration-300 ${
                  index === activeImageIndex ? "ring-2 ring-accent" : "hover:ring-2 hover:ring-accent/60"
                }`}
              >
                <img
                  src={img}
                  alt={`${projects[activeProject].title} - imagem ${index + 1}`}
                  loading="lazy"
                  className="w-full h-32 sm:h-36 md:h-32 lg:h-40 object-cover transition-transform duration-700 hover:scale-105"
                />
              </button>
            ))}
          </div>
        )}

        {/* Thumbnails */}
        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mt-6 md:mt-8">
          {projects.map((p, i) => (
            <motion.button
              key={p.title}
              onClick={() => {
                setActiveProject(i);
                setActiveImageIndex(0);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative rounded-xl md:rounded-2xl overflow-hidden w-[72px] h-[50px] sm:w-24 sm:h-16 md:w-32 md:h-20 lg:w-36 lg:h-24 transition-all duration-300 ${
                i === activeProject
                  ? "ring-2 ring-accent ring-offset-2 ring-offset-secondary shadow-lg"
                  : "opacity-50 hover:opacity-80"
              }`}
            >
              <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
              {i === activeProject && (
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
            {activeProject + 1} <span className="text-border">/ </span>{projects.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

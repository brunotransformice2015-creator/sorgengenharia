import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import logoSorg from "@/assets/logodasorg.png";

const WA_LINK = "https://wa.me/5511942132670?text=Quero%20fazer%20um%20or%C3%A7amento";

const Logo = ({ scrolled }: { scrolled: boolean }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <span className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${
        scrolled ? "text-primary" : "text-primary-foreground"
      }`}>
        SORG<span className="font-light ml-1">Engenharia</span>
      </span>
    );
  }

  return (
    <img
      src={logoSorg}
      alt="Sorg Engenharia"
      onError={() => setImgError(true)}
      className={`h-14 sm:h-16 w-auto object-contain transition-all duration-300 ${
        scrolled ? "" : "brightness-0 invert"
      }`}
    />
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#projetos" },
    { label: "Financiamento", href: "#financiamento" },
    { label: "Sobre", href: "#sobre" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/30"
          : "bg-white/10 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <a href="#" className="flex items-center shrink-0">
          <Logo scrolled={scrolled} />
        </a>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-foreground/70 hover:text-primary"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 lg:px-6 py-2.5 rounded-full hover:bg-[#20bd5a] hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <FaWhatsapp size={16} />
            Fale Conosco
          </a>
        </div>

        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/98 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-5 gap-4">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-base font-medium text-foreground/70 hover:text-primary py-1"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3 rounded-full mt-2"
              >
                <FaWhatsapp size={16} />
                Fale Conosco
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

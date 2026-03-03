import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import sorgLogo from "@/assets/sorglogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#projetos" },
    { label: "Financiamento", href: "#financiamento" },
    { label: "Sobre", href: "#sobre" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center">
          <img src={sorgLogo} alt="Sorg Engenharia" className="h-10" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-primary text-primary-foreground text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Fale Conosco
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-background border-t border-border"
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="bg-primary text-primary-foreground text-sm font-semibold px-6 py-2.5 rounded-lg text-center"
            >
              Fale Conosco
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

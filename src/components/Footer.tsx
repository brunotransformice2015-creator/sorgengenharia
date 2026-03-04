import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import logoSorg from "@/assets/logosorg.png";

const WA_LINK = "https://wa.me/5511942132670?text=Quero%20fazer%20um%20or%C3%A7amento";

const socials = [
  { icon: FaInstagram, href: "https://instagram.com/sorgengenharia", label: "Instagram" },
  { icon: FaWhatsapp, href: WA_LINK, label: "WhatsApp" },
];

const footerLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Financiamento", href: "#financiamento" },
  { label: "Sobre", href: "#sobre" },
];

const FooterLogo = () => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <span className="text-xl font-bold text-section-dark-foreground mb-4 block">
        SORG <span className="font-light">Engenharia</span>
      </span>
    );
  }

  return (
    <img
      src={logoSorg}
      alt="Sorg Engenharia"
      onError={() => setImgError(true)}
      className="h-10 w-auto min-w-[100px] object-contain brightness-0 invert mb-4"
    />
  );
};

const Footer = () => {
  return (
    <footer className="bg-section-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Top section */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 border-b border-section-dark-foreground/10">
          {/* Logo + description */}
          <div className="md:col-span-1">
            <FooterLogo />
            <p className="text-section-dark-foreground/50 text-sm leading-relaxed max-w-xs">
              Engenharia de excelência para transformar seu projeto em realidade. 
              Do planejamento à entrega, cada detalhe sob controle.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-section-dark-foreground font-semibold text-sm mb-4 uppercase tracking-wider">
              Navegação
            </h4>
            <div className="flex flex-col gap-3">
              {footerLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-section-dark-foreground/50 text-sm hover:text-section-dark-foreground transition-colors duration-200"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="text-section-dark-foreground font-semibold text-sm mb-4 uppercase tracking-wider">
              Contato
            </h4>
            <a
              href="tel:+5511942132670"
              className="text-section-dark-foreground/50 text-sm hover:text-section-dark-foreground transition-colors block mb-2"
            >
              +55 (11) 94213-2670
            </a>
            <a
              href="mailto:contato@sorgengenharia.com.br"
              className="text-section-dark-foreground/50 text-sm hover:text-section-dark-foreground transition-colors block mb-6"
            >
              contato@sorgengenharia.com.br
            </a>

            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-section-dark-foreground/10 flex items-center justify-center text-section-dark-foreground/60 hover:bg-accent hover:text-section-dark-foreground transition-colors duration-300"
                >
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-section-dark-foreground/30 text-xs">
            © {new Date().getFullYear()} Sorg Engenharia. Todos os direitos reservados.
          </p>
          <p className="text-section-dark-foreground/20 text-xs">
            Feito por{" "}
            <span className="text-section-dark-foreground/40 font-medium hover:text-section-dark-foreground/60 transition-colors cursor-pointer">
              Você Digital Propaganda
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

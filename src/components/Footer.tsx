import sorgLogo from "@/assets/sorglogo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={sorgLogo} alt="Sorg Engenharia" className="h-9 max-w-[140px] w-auto object-contain brightness-0 invert" />
        </div>
        <div className="text-center md:text-right">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Sorg Engenharia. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/30 text-xs mt-1">
            Feito por{" "}
            <span className="text-primary-foreground/50 font-medium">Você Digital Propaganda</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

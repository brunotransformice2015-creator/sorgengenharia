import sorgLogo from "@/assets/sorglogo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={sorgLogo} alt="Sorg Engenharia" className="h-8 brightness-0 invert" />
        </div>
        <p className="text-primary-foreground/40 text-sm">
          © {new Date().getFullYear()} Sorg Engenharia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

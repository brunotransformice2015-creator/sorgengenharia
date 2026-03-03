const Footer = () => {
  return (
    <footer className="bg-section-dark py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-display text-lg font-bold text-section-dark-foreground">
            SORG<span className="font-sans font-light text-section-dark-foreground/60 ml-1">Engenharia</span>
          </span>
          <p className="text-section-dark-foreground/40 text-sm mt-1">
            Gerenciamento completo de obras residenciais
          </p>
        </div>
        <p className="text-section-dark-foreground/30 text-sm">
          © {new Date().getFullYear()} Sorg Engenharia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

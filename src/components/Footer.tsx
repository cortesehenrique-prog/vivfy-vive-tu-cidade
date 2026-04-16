const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-heading font-bold text-xl gradient-text">VIVFY</p>
            <p className="text-xs text-muted-foreground mt-1">
              Vive Tu Cidade
            </p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#eventos" className="hover:text-foreground transition-colors">Eventos</a>
            <a href="#varejo" className="hover:text-foreground transition-colors">Varejo</a>
            <a href="#tecnologia" className="hover:text-foreground transition-colors">Tecnologia</a>
            <a href="#investidor" className="hover:text-foreground transition-colors">Investidor</a>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} VIVFY. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

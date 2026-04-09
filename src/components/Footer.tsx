const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="font-heading font-bold text-xl gradient-text mb-2">VIVFY</p>
        <p className="text-sm text-muted-foreground">
          Vive Tu Cidade · © {new Date().getFullYear()} VIVFY. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

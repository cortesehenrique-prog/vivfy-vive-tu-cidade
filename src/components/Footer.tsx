import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <Link to="/" className="font-heading font-bold text-xl gradient-text">VIVFY</Link>
            <p className="text-xs text-muted-foreground mt-1">
              Vive Tu Cidade
            </p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/eventos" className="hover:text-foreground transition-colors">Eventos</Link>
            <Link to="/varejo" className="hover:text-foreground transition-colors">Varejo</Link>
            <Link to="/tecnologia" className="hover:text-foreground transition-colors">Tecnologia</Link>
            <Link to="/investidor" className="hover:text-foreground transition-colors">Investidor</Link>
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

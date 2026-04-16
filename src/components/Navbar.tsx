import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/ecossistema", label: "Ecossistema" },
  { to: "/eventos", label: "Eventos" },
  { to: "/varejo", label: "Varejo" },
  { to: "/tecnologia", label: "Tecnologia" },
  { to: "/investidor", label: "Investidor" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="font-heading font-bold text-2xl tracking-tight text-foreground">
          VIVFY
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors ${
                location.pathname === l.to
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="#login"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Login
          </a>
          <Link
            to="/investidor"
            className="gradient-cta px-5 py-2 rounded-lg text-sm font-semibold text-foreground transition-all hover:scale-105"
          >
            Fale Conosco
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-card border-t border-border/50 px-6 py-4 space-y-3">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block text-sm transition-colors ${
                location.pathname === l.to
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="#login"
            onClick={() => setOpen(false)}
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Login
          </a>
          <Link
            to="/investidor"
            onClick={() => setOpen(false)}
            className="block gradient-cta px-5 py-2 rounded-lg text-sm font-semibold text-foreground text-center"
          >
            Fale Conosco
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

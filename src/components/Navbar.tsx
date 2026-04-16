import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/ecossistema", label: "Ecossistema" },
  { to: "/eventos", label: "VIVFY Eventos" },
  { to: "/varejo", label: "VIVFY Varejo" },
  { to: "/tecnologia", label: "Tecnologia" },
  { to: "/investidor", label: "Investor Area" },
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
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card border-b border-border/50" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <Link
          to="/"
          className="font-heading font-bold text-2xl tracking-tight gradient-text"
          style={{ textShadow: "0 0 20px hsl(var(--cyan-neon) / 0.5)" }}
        >
          VIVFY
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => {
            const isActive = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative text-sm font-medium transition-colors py-1 ${
                  isActive
                    ? "text-cyan-neon"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {isActive && (
                  <span
                    className="absolute -bottom-0.5 left-0 right-0 h-px bg-cyan-neon"
                    style={{ boxShadow: "0 0 8px hsl(var(--cyan-neon))" }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground"
          aria-label="Abrir menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass-card border-t border-border/50 px-6 py-4 space-y-3">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`block text-sm transition-colors ${
                location.pathname === l.to
                  ? "text-cyan-neon"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

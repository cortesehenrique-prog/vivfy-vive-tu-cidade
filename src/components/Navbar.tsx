import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#solucao", label: "Solução" },
  { href: "#tecnologia", label: "Tecnologia" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-heading font-bold text-xl gradient-text">
          VIVFY
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
              {l.label}
            </a>
          ))}
          <a
            href="mailto:contato@vivfy.com"
            className="gradient-cta px-5 py-2 rounded-lg text-sm font-semibold text-foreground transition-all hover:scale-105"
          >
            Contato
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-card border-t border-border/50 px-6 py-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="mailto:contato@vivfy.com" className="block gradient-cta px-5 py-2 rounded-lg text-sm font-semibold text-foreground text-center">
            Contato
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

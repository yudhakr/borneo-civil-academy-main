import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">PB</span>
            </div>
            <span className="font-bold text-xl text-foreground">
              Project <span className="text-primary">Borneo</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#tentang" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Tentang Kami
            </a>
            <a href="#program" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Program Kursus
            </a>
            <a href="#founder" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              CEO & Founder
            </a>
            <Button variant="default" size="lg">
              Daftar Sekarang
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a 
                href="#tentang" 
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang Kami
              </a>
              <a 
                href="#program" 
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Program Kursus
              </a>
              <a 
                href="#founder" 
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                CEO & Founder
              </a>
              <Button variant="default" size="lg" className="w-full mt-2">
                Daftar Sekarang
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

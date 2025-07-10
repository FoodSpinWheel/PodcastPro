import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={cn(
      "fixed w-full top-0 z-50 bg-white transition-all duration-300",
      isScrolled && "shadow-lg"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Elevate Recap</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#how-it-works"
                onClick={(e) => handleNavClick(e, "how-it-works")}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                How It Works
              </a>
              <a
                href="#what-you-get"
                onClick={(e) => handleNavClick(e, "what-you-get")}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#pricing"
                onClick={(e) => handleNavClick(e, "pricing")}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Pricing
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
                className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="bg-accent text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a
                href="#how-it-works"
                onClick={(e) => handleNavClick(e, "how-it-works")}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                How It Works
              </a>
              <a
                href="#what-you-get"
                onClick={(e) => handleNavClick(e, "what-you-get")}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </a>
              <a
                href="#pricing"
                onClick={(e) => handleNavClick(e, "pricing")}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Pricing
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="bg-accent text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

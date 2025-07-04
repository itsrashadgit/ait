
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const scrollToPricing = () => {
    const element = document.getElementById("pricing");
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AiT
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("features")} className="text-gray-700 hover:text-blue-600 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("how-it-works")} className="text-gray-700 hover:text-blue-600 transition-colors">
              How it Works
            </button>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button onClick={scrollToPricing} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Buy Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection("home")} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("features")} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection("services")} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection("how-it-works")} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                How it Works
              </button>
              <Link to="/blog" className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Blog
              </Link>
              <button onClick={() => scrollToSection("contact")} className="text-left text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </button>
              <Button onClick={scrollToPricing} className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                Buy Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

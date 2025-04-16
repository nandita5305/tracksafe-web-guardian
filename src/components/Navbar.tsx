
import React, { useState, useEffect } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold">
            Track<span className="text-tracksafe-blue">Safe</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-tracksafe-blue transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-tracksafe-blue transition-colors"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-tracksafe-blue transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-tracksafe-blue transition-colors"
            >
              Pricing
            </a>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                Log in
              </Button>
              <Button size="sm">Buy Now</Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 right-0 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-700 hover:text-tracksafe-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-tracksafe-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-tracksafe-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-tracksafe-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" size="sm" className="w-full">
                  Log in
                </Button>
                <Button size="sm" className="w-full">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#00000D]/80 backdrop-blur-md py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                <circle
                  cx="20"
                  cy="20"
                  r="19"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 12L16 28L20 12L24 28L28 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-lg sm:text-xl font-medium">
              M. Abdul Wasay Abid
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <button
              onClick={() => scrollToSection("overview")}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection("experience-projects")}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Experience & Projects
            </button>
            <button
              onClick={() => scrollToSection("certificates")}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Certificates
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="connect-button"
            >
              Let's Connect →
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#00000D]/95 backdrop-blur-md py-4">
            <div className="container mx-auto px-6 flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("overview")}
                className="text-sm text-gray-300 hover:text-white transition-colors py-2"
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection("experience-projects")}
                className="text-sm text-gray-300 hover:text-white transition-colors py-2"
              >
                Experience & Projects
              </button>
              <button
                onClick={() => scrollToSection("certificates")}
                className="text-sm text-gray-300 hover:text-white transition-colors py-2"
              >
                Certificates
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="connect-button w-full justify-center"
              >
                Let's Connect →
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

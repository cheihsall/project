import React, { useState, useEffect } from 'react';
import { Truck, Menu, X, Leaf, ShoppingBag } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  // Gérer le défilement pour changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Déterminer la section active en fonction du défilement
      const sections = ['problem', 'solution', 'market', 'business', 'team', 'roadmap', 'needs'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (sectionId) => {
    setIsMenuOpen(false);
    setActiveLink(sectionId);
  };

  const navLinks = [
    { id: 'problem-section', label: 'Problème' },
    { id: 'solution', label: 'Solution' },
    { id: 'market', label: 'Marché' },
    { id: 'business', label: 'Modèle' },
    { id: 'team', label: 'Équipe' },
    { id: 'roadmap', label: 'Feuille de route' },
    { id: 'needs', label: 'Besoins' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-green-800/85 backdrop-blur-lg shadow-xl py-2' 
          : 'bg-gradient-to-r from-green-700 to-green-600 py-3'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3 group">
          <div className="flex items-center justify-center bg-white/15 p-2.5 rounded-xl transition-all duration-300 group-hover:bg-white/25 shadow-lg shadow-green-900/20">
            <Truck size={24} className="text-white transition-transform duration-300 group-hover:rotate-12" />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xl font-bold relative">
              Eko
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-green-300 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </span>
            <span className="text-xl font-bold text-green-200">Logis</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className={`relative px-4 py-2.5 rounded-xl transition-all duration-300 ${
                activeLink === link.id 
                  ? 'text-white bg-white/15 shadow-md shadow-green-900/20' 
                  : 'text-green-100 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => handleLinkClick(link.id)}
            >
              {link.label}
              {activeLink === link.id && (
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-300 rounded-full shadow-md shadow-green-400/40"></span>
              )}
            </a>
          ))}
          <a 
            href="#contact" 
            className="ml-3 bg-white text-green-700 hover:bg-green-50 font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border-2 border-white/80"
            onClick={() => handleLinkClick('contact')}
          >
            Contact
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden bg-white/10 hover:bg-white/20 text-white p-3 rounded-xl focus:outline-none relative z-20 transition-all duration-300 shadow-md"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <div className="relative w-6 h-5">
            <span 
              className={`absolute block w-6 h-0.5 bg-white rounded-full transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 top-2.5' : 'top-0.5'
              }`}
            ></span>
            <span 
              className={`absolute block w-6 h-0.5 bg-white top-2.5 rounded-full transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span 
              className={`absolute block w-6 h-0.5 bg-white rounded-full transform transition-all duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45 top-2.5' : 'top-4.5'
              }`}
            ></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-gradient-to-br from-green-800 to-green-900/98 backdrop-blur-xl z-10 transform transition-all duration-400 ease-in-out ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } md:hidden pt-24`}
      >
        <div className="h-full flex flex-col overflow-y-auto">
          <nav className="flex flex-col space-y-2 p-6">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                className={`p-4 text-lg rounded-xl font-medium transition-all duration-200 flex items-center ${
                  activeLink === link.id 
                    ? 'border-l-4 border-green-300 bg-white/10 text-green-200 shadow-lg' 
                    : 'border-l-4 border-transparent hover:border-green-300/50 hover:bg-white/5'
                }`}
                onClick={() => handleLinkClick(link.id)}
              >
                {activeLink === link.id && (
                  <div className="w-2 h-2 bg-green-300 rounded-full mr-3"></div>
                )}
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="mt-auto p-6 border-t border-green-700/50 rounded-t-3xl bg-green-800/40 backdrop-blur-md">
            <a 
              href="#contact"
              className="block w-full bg-white text-green-700 hover:bg-green-50 text-center font-semibold py-4 px-4 rounded-2xl transition-all duration-300 shadow-xl transform hover:-translate-y-0.5"
              onClick={() => handleLinkClick('contact')}
            >
              Nous contacter
            </a>
            
            <div className="flex justify-center mt-8 mb-4">
              <div className="flex space-x-6 p-4 bg-white/10 rounded-full shadow-inner">
                <Truck size={24} className="text-green-200 hover:text-white transition-colors duration-300" />
                <Leaf size={24} className="text-green-200 hover:text-white transition-colors duration-300" />
                <ShoppingBag size={24} className="text-green-200 hover:text-white transition-colors duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
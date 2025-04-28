
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Alumni Success', path: '/alumni-success' },
    { name: 'Contact', path: '/contact' },
    
  ];
  

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 backdrop-blur-md bg-club-dark/80 border-b border-white/5' : 'py-5'
      }`}
    >
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Logo size="medium" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-club-dark/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-24">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `text-2xl font-medium py-4 px-6 ${isActive ? 'text-club-accent' : 'text-white'}`
              }
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

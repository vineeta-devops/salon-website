import { useState, useEffect, useRef } from 'react';
import { Container } from './ui/Container';
import { salonConfig } from '../data/salonConfig';
import './Navbar.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Offers', href: '#offers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="navbar">
      <Container>
        <div className="navbar-container">
          <a href="#" className="navbar-logo" onClick={closeMenu}>
            {salonConfig.salonName}
          </a>

          <nav className="navbar-links" aria-label="Desktop Navigation">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="navbar-actions">
            <a href="#appointment" className="btn btn-primary">
              Book Appointment
            </a>
          </div>

          <button
            className={`hamburger ${isOpen ? 'is-open' : ''}`}
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu ${isOpen ? 'is-open' : ''}`} 
        ref={menuRef}
        role="dialog"
        aria-label="Mobile Navigation"
      >
        <nav aria-label="Mobile Menu Links" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <div className="mobile-menu-cta" onClick={closeMenu}>
          <a href="#appointment" className="btn btn-primary btn-full">
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
};

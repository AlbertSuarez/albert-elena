'use client';

import React, { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
          <li><a href="#cerimonia" onClick={() => scrollToSection('cerimonia')}>Cerimònia</a></li>
          <li><a href="#informacio" onClick={() => scrollToSection('informacio')}>Informació</a></li>
          <li><a href="#programa" onClick={() => scrollToSection('programa')}>Programa</a></li>
          <li><a href="#allotjament" onClick={() => scrollToSection('allotjament')}>Allotjament</a></li>
          <li><a href="#preguntes" onClick={() => scrollToSection('preguntes')}>Preguntes</a></li>
          <li><a href="#confirmacio" onClick={() => scrollToSection('confirmacio')}>Confirmació</a></li>
          <li><a href="#coneixe-ns-mes" onClick={() => scrollToSection('coneixe-ns-mes')}>Coneixe&apos;ns més</a></li>
        </ul>
        <div 
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 
"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './Accommodation.module.css';
import { Section } from '../Section/Section';
import Image from 'next/image';

const Accommodation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before fully visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Section
      id="allotjament"
      title="ALLOTJAMENT"
      style="secondary"
      titleDirection="right"
    >
      <div ref={sectionRef}>
      <div className={styles.accommodationContent}>
        <div className={styles.backgroundFigure}>
          <Image 
            src="/assets/images/figures/figura-allotjament.png" 
            alt="Background decoration" 
            className={styles.backgroundImage}
            objectFit="cover"
            loading="eager"
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className={`${styles.accommodationItem} ${isVisible ? styles.animate1 : ''}`}>
          📍 La masia inclou habitacions per quedar-s&apos;hi
        </div>
        <div className={`${styles.accommodationItem} ${isVisible ? styles.animate2 : ''}`}>
          🍳 Amb un bon esmorzar a l&apos;endemà
        </div>
        <div className={`${styles.accommodationItem} ${isVisible ? styles.animate3 : ''}`}>
          💃 Podem allargar la festa sense presses ni complicacions
        </div>
        <div>
          <p className={`${styles.bottomText} ${isVisible ? styles.animate4 : ''}`}>👉 Avisa&apos;ns al <strong>formulari</strong> si et vols quedar!</p>
          <div className={`${styles.figureContainer} ${isVisible ? styles.animate4 : ''}`}>
            <img 
              src="/assets/images/figures/figura-allotjament-2.png" 
              alt="Accommodation decoration" 
              className={styles.figure}
            />
        </div>
        </div>

      </div>
      </div>
    </Section>
  );
};

export default Accommodation; 
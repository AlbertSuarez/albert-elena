'use client';

import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { Title } from '../Title/Title';
import { Section } from '../Section/Section';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "Quin és el codi de vestimenta?",
      answer: "Elegant informal. Recomanem roba còmoda ja que hi haurà ball i l'esdeveniment és en un entorn rural."
    },
    {
      question: "Hi ha aparcament disponible?",
      answer: "Sí, Mas Muxach disposa d'aparcament gratuït per a tots els convidats."
    },
    {
      question: "Puc portar nens?",
      answer: "Per descomptat! Els nens són benvinguts. Si us plau, indiqueu-ho en la confirmació per adaptar el menú."
    },
    {
      question: "Què passa si plou?",
      answer: "Mas Muxach disposa d'espais coberts per a tota la celebració en cas de mal temps."
    },
    {
      question: "Fins a quina hora és la festa?",
      answer: "La festa continuarà fins tard! Per als qui es quedin a dormir, podran continuar celebrant sense preocupacions."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section id="preguntes" title="PREGUNTES FREQÜENTS" style="white" titleDirection="left">
      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          <div key={index} className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}>
            <button 
              className={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span className={styles.faqIcon}>+</span>
            </button>
            <div className={styles.faqAnswer}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FAQ; 
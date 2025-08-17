'use client';

import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { Section } from '../Section/Section';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "🚗 Com arribar a Mas Muxach?",
      answer: "La masia està a Brunyola (Girona) i disposa d'aparcament gratuït. Si us quedeu a dormir, us recomanem venir en cotxe. Per a aquells que no es quedin a dormir o no disposin d'un vehicle, parlarem en un futur de com gestionar-ho."
    },
    {
      question: "👗 Quin és el codi de vestimenta?",
      answer: "Elegant i informal. Recomanem roba còmoda ja que hi haurà ball i l'esdeveniment és en un entorn rural."
    },
    {
      question: "👶 Puc portar nens?",
      answer: "Per descomptat! Els nens són benvinguts. Si us plau, indiqueu-ho en la confirmació per adaptar el menú."
    },
    {
      question: "🏠 Què inclou l'allotjament a la masia?",
      answer: "L'allotjament inclou habitació compartida, llençols i esmorzar l'endemà al matí. Porteu roba còmoda per dormir!"
    },
    {
      question: "🕐 Fins a quina hora és la festa?",
      answer: "La festa no té hora de finalització! La barra lliure i el DJ duraran 3 hores aproximadament, però la festa continuarà fins que tothom marxi. Nosaltres oferirem més música i sangria de cava, vosaltres només heu de portar les ganes de ballar i gaudir!"
    },
    {
      question: "🎵 Hi haurà música en directe?",
      answer: "Tindrem DJ i una llista de reproducció col·laborativa. Passarem un enllaç més endavant perquè pugueu afegir les vostres cançons preferides!"
    },
    {
      question: "🌧️ Què passa si plou?",
      answer: "Mas Muxach disposa d'espais coberts per a tota la celebració en cas de mal temps."
    },
    {
      question: "🎁 Hi ha llista de noces?",
      answer: "No, no ens agrada el concepte que tot convidat a un casament hagi de cobrir el seu cobert. Hem decidit fer aquesta celebració perquè ens fa il·lusió reunir-vos per celebrar el nostre enllaç. Per això, no esperem cap regal a canvi, només la vostra presència i estima. Això és el que realment ens fa feliços!"
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
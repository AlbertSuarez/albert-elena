'use client';
import React from 'react';
import styles from './Ceremony.module.css';
import Button from '../Button/Button';
import { Section } from '../Section/Section';

const Ceremony: React.FC = () => {
  return (
      <Section
        id="cerimonia"
        title="CERIMÒNIA"
        style="secondary"
        titleDirection="left"
      >
        <div className={styles.ceremonyContent}>
          <div className={styles.venueImage}>
            <img src="/assets/images/mas-muxach.jpg" alt="Mas Muxach" className={styles.venueImg} />
          </div>
          <div className={styles.venueInfo}>
            <div className={styles.ceremonyDetails}>
              <div className={styles.detailItem}>
                <strong>Data:</strong> 11 d&apos;abril de 2026 (Dissabte)
              </div>
              <div className={styles.detailItem}>
                Masia Mas Muxach, Brunyola (Girona)
              </div>
              <div className={styles.detailItem}>
                <Button onClick={() => { window.open('https://maps.app.goo.gl/V6TaM6MgLW6GKd8U9', '_blank') }}>Veure Ubicació</Button>
              </div>
            </div>
          </div>
        </div>
    </Section>
  );
};

export default Ceremony; 
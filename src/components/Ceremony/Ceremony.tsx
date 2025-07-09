import React from 'react';
import styles from './Ceremony.module.css';

const Ceremony: React.FC = () => {
  return (
    <section id="cerimonia" className={styles.ceremonySection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Cerimònia</h2>
        </div>
        <div className={styles.ceremonyContent}>
          <div className={styles.venueImage}>
            <img src="/assets/images/mas-muxach.jpg" alt="Mas Muxach" className={styles.venueImg} />
          </div>
          <div className={styles.venueInfo}>
            <h3>Masia Mas Muxach, Brunyola (Girona)</h3>
            <p>A 1h 15min de Barcelona</p>
            <div className={styles.ceremonyDetails}>
              <div className={styles.detailItem}>
                <strong>Data:</strong> 11 d&apos;abril de 2026 (Dissabte)
              </div>
              <div className={styles.detailItem}>
                <strong>Hora d&apos;inici:</strong> 12:30h
              </div>
              <div className={styles.detailItem}>
                <strong>Ubicació:</strong> <a href="https://maps.app.goo.gl/V6TaM6MgLW6GKd8U9" target="_blank" rel="noopener noreferrer">Mas Muxach</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ceremony; 
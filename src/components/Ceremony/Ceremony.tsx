'use client';
import React from 'react';
import styles from './Ceremony.module.css';
import Button from '../Button/Button';
import { Section } from '../Section/Section';

import cx from 'classnames';
import { DetailItem } from './DetailItem';

const Ceremony: React.FC = () => {
  return (
      <Section
        id="cerimonia"
        title="CERIMÒNIA"
        style="secondary"
        titleDirection="left"
      >
        <div className={styles.ceremonyContent}>
          {/* <div className={styles.venueImage}>
            <img src="/assets/images/mas-muxach.jpg" alt="Mas Muxach" className={styles.venueImg} />
          </div> */}
          <div className={styles.venueImage}>
            <img src="/assets/images/cerimonia.png" alt="Mas Muxach" className={styles.venueImg} />
          </div>
          <div className={styles.venueInfo}>
            <div className={styles.ceremonyDetails}>

              <DetailItem icon="calendar" title="DATA" content="Dissabte, 11 d'abril de 2026" />
              <DetailItem icon="clock" title="HORA" content="A les 12:00h" />
              <DetailItem icon="location" title="LLOC" content="Masia Mas Muxach, Brunyola (Girona)" />
              
              <div className={cx(styles.detailItem, styles.button)}>
                <Button onClick={() => { window.open('https://maps.app.goo.gl/V6TaM6MgLW6GKd8U9', '_blank') }}>
                  <img src="/assets/images/icons/marker.svg" alt="Map pin" />
                  Veure ubicació
                </Button>
              </div>
            </div>
          </div>
        </div>
    </Section>
  );
};

export default Ceremony; 
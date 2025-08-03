import React from 'react';
import styles from './Accommodation.module.css';
import { Section } from '../Section/Section';

const Accommodation: React.FC = () => {
  return (
    <Section
      id="allotjament"
      title="ALLOTJAMENT"
      style="secondary"
      titleDirection="right"
    >
      <div className={styles.accommodationContent}>
        <div className={styles.accommodationInfo}>
          <h3>Queda’t a dormir!</h3>
          <p>Ens encantaria despertar-nos envoltats de cares conegudes i compartir el primer cafè del dia amb vosaltres. Si tens marge, queda’t a dormir! És la manera més fàcil (i <i>divertida</i>) de tancar la festa.</p>
          <ul>
            <li>📍 La masia inclou habitacions per quedar-s’hi</li>
            <li>🍳 Amb un bon esmorzar a l’endemà</li>
            <li>💃 Podem allargar la festa sense presses ni complicacions</li>
          </ul>
          <p>👉 Avisa’ns al <strong>formulari</strong> si et vols quedar!</p>
        </div>
      </div>
    </Section>
  );
};

export default Accommodation; 
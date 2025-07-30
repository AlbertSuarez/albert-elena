import React from 'react';
import styles from './Accommodation.module.css';
import { Title } from '../Title/Title';

const Accommodation: React.FC = () => {
  return (
    <section id="allotjament" className={styles.accommodationSection}>
      <div className={styles.container}>
        <Title direction='right'>ALLOTJAMENT</Title>
        <div className={styles.accommodationContent}>
          <div className={styles.accommodationInfo}>
            <h3>Quedeu-vos a dormir!</h3>
            <p>Mas Muxach ofereix la possibilitat de quedar-se a dormir al mateix lloc de la celebració.</p>
            <ul>
              <li>✨ Allotjament del dissabte al diumenge</li>
              <li>🍳 Esmorzar inclòs el diumenge al matí</li>
              <li>🏡 Ambient rural i tranquil</li>
              <li>🚗 Aparcament disponible</li>
            </ul>
            <p><strong>Important:</strong> Confirmeu si us quedareu a dormir en el formulari de confirmació.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accommodation; 
import React from 'react';
import styles from './Information.module.css';

const Information: React.FC = () => {
  return (
    <section id="informacio" className={styles.infoSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Informació de l&apos;esdeveniment</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <h3>📅 Horaris</h3>
            <ul>
              <li><strong>12:30h</strong> - Arribada dels convidats</li>
              <li><strong>13:00h</strong> - Cerimònia</li>
              <li><strong>13:30h</strong> - Còctel i aperitius</li>
              <li><strong>15:00h</strong> - Dinar</li>
              <li><strong>18:00h</strong> - Festa i ball</li>
            </ul>
          </div>
          <div className={styles.infoCard}>
            <h3>🥗 Menú</h3>
            <p>Tota la celebració serà completament <strong>vegetariana</strong>.</p>
            <ul>
              <li>Aperitius variats</li>
              <li>Primer plat</li>
              <li>Segon plat</li>
              <li>Postres</li>
              <li>Barra lliure</li>
            </ul>
          </div>
          <div className={styles.infoCard}>
            <h3>🏠 Allotjament</h3>
            <p>Podeu quedar-vos a dormir al mateix lloc del dissabte al diumenge.</p>
            <p><strong>Esmorzar</strong> inclòs el diumenge al matí per als convidats que es quedin.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information; 
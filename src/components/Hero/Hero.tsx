import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.coupleNamesHeader}>
          ALBERT + <br />
          ELENA = <span className={styles.rings}></span>
        </h1>
        
        <div className={styles.couplePhoto}>
          <img src="/assets/images/albert-elena.png" alt="Albert i Elena" className={styles.coupleImg} />
        </div>
        
        <div className={styles.weddingDetails}>
          <h2 className={styles.weddingTitle}>Ens casem:</h2>
          <div className={styles.weddingDate}>11.04.26</div>
          <div className={styles.weddingLocation}>MAS MUXACH, BRUNYOLA</div>
          <div className={styles.heart}>♡</div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
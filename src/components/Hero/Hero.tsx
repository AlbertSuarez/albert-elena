import React from 'react';
import styles from './Hero.module.css';
import cx from 'classnames';

const Hero: React.FC = () => {
  return (
    <section id="hero" className={styles.hero}>
        <div className={styles.couplePhoto}>
        <img 
            src="/assets/images/albert-elena-ordinador.png" 
            alt="Albert i Elena"
            className={cx(styles.coupleImg, 'transition-smooth', 'hover-scale', styles.ordinador)}
          />
          <img 
            src="/assets/images/albert-elena-movil.png" 
            alt="Albert i Elena"
            className={cx(styles.coupleImg, 'transition-smooth', 'hover-scale', styles.movil)}
          />
        </div>
        
        <div className={styles.backgroundTransition}>
          <img 
            src="/assets/images/figures/transició.png" 
            alt="Background transition"
            className={styles.backgroundTransitionImg}
          />
          <div className={styles.backgroundTransitionBorder}/>
        </div>
        <div className={styles.backgroundFallback}/>
        
      <div className={`full-width ${styles.heroContent}`}>
        <div className={styles.titleContainer}>
          <h1 className={`${styles.title}`}>
            ALBERT + <br />
            <div>ELENA = <span className={styles.rings}></span></div>
          </h1>
        </div>
        
        <div className={cx(styles.weddingDetailsContainer, 'full-width')}>
          <div className={`${styles.weddingDetails} ${styles.weddingDetailsBounce}`}>
              <svg 
                className={styles.weddingDetailsSvg}
                width="539" 
                height="377" 
                viewBox="0 0 539 377" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M97.8178 49.8434C44.165 74.6318 10.1841 118.071 2.07761 163.181C-6.03724 208.286 10.1758 254.626 40.9972 294.479C63.9367 324.135 96.3794 351.458 139.822 365.317C190.307 381.427 248.391 377.505 303.408 373.269C339.551 370.48 376.017 367.65 410.456 359.38C444.902 351.103 477.603 336.83 497.857 315.38C519.05 292.919 524.687 265.07 529.776 238.273C536.136 204.818 542.505 170.926 536.751 137.424C528.121 87.1028 490.174 37.2719 433.254 6.22725C405.542 -8.88448 367.637 7.78697 334.329 11.5029C295.991 15.7741 257.18 17.3279 218.809 21.3451C176.497 25.7758 134.102 33.0775 97.8178 49.8434Z" 
                  fill="var(--secondary)"
                />
              </svg>
              
              <div className={`${styles.weddingDetailsContent}`}>
                <h2 className={`${styles.weddingTitle}`}>ENS CASEM!</h2>
                <div className={styles.weddingDate}>11.04.26</div>
                <div className={styles.weddingLocation}>MAS MUXACH, BRUNYOLA</div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
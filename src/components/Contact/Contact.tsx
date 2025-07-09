import React from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <section id="contacte" className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Contacte</h2>
        <div className={styles.contactContent}>
          <p>Si teniu qualsevol pregunta, no dubteu a contactar-nos:</p>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <strong>Albert:</strong> <a href="mailto:alsumo95@gmail.com">alsumo95@gmail.com</a>
            </div>
            <div className={styles.contactItem}>
              <strong>Elena:</strong> <a href="mailto:elena.ruiz.bdn@gmail.com">elena.ruiz.bdn@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
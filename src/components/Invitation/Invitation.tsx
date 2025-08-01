'use client';

import Button from '../Button/Button';
import styles from './Invitation.module.css';

export default function Invitation() {
  const scrollToForm = () => {
    const formSection = document.getElementById('confirmacio');
    if (formSection) {
      formSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="invitation" className={styles.invitation}>
      <div className={styles.invitationContent}>
        <p>Hola NOM!</p>
        <p>si has rebut aquest enllaç és perquè estàs invitat a la nostra boda.</p>
        <p>Aquí hi trobaras tota la informació i <strong>un formulari per confirmar l’asistencia.</strong></p>
      </div>
      <div className={styles.invitationButton}>
        <Button onClick={scrollToForm}>Ves al formulari</Button>
      </div>
    </section>
  );
}
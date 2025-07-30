'use client';

import Button from '../Button/Button';
import styles from './Invitation.module.css';

export default function Invitation() {
  return (
    <section id="invitation" className={styles.invitation}>
      <div className={styles.invitationContent}>
        <p>Hola NOM!</p>
        <p>si has rebut aquest enllaç és perquè estàs invitat a la nostra boda.</p>
        <p>Aquí hi trobaras tota la informació i <strong>un formulari per confirmar l’asistencia.</strong></p>
      </div>
      <div className={styles.invitationButton}>
        <Button onClick={() => { console.log('clicked') }}>Ves al formulari</Button>
      </div>
    </section>
  );
}
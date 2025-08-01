'use client';

import { useSearchParams } from 'next/navigation';
import Button from '../Button/Button';
import styles from './Invitation.module.css';

export default function Invitation() {
  const guestName = useSearchParams().get('id');
  const getGreeting = () => {
    if (guestName && guestName.trim()) {
      return `Hola, ${guestName}!`;
    }
    return 'Hola!';
  };
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
        <p>{getGreeting()}</p>
        <p>Si estàs llegint això… enhorabona! Estàs oficialment convidat al nostre casament 🎉</p>
        <p>Aquí trobaràs tota la informació important i un <strong>formulari per confirmar</strong> que vindràs a celebrar-ho amb nosaltres.</p>
      </div>
      <div className={styles.invitationButton}>
        <Button onClick={scrollToForm}>Ves al formulari</Button>
      </div>
    </section>
  );
}
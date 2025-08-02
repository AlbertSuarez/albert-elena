'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Button from '../Button/Button';
import styles from './Invitation.module.css';

function isValidBase64(str: string): boolean {
  // Check if string is empty
  if (!str || str.length === 0) {
    return false;
  }
  // Base64 regex pattern: only A-Z, a-z, 0-9, +, /, and = for padding
  const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
  // Check if string matches base64 pattern
  if (!base64Regex.test(str)) {
    return false;
  }
  // Check if length is multiple of 4 (base64 requirement)
  if (str.length % 4 !== 0) {
    return false;
  }
  return true;
}

function decodeBase64Utf8(base64Text: string): string {
  // First validate the base64 format
  if (!isValidBase64(base64Text)) {
    console.warn('Invalid base64 format provided');
    return '';
  }
  try {
    // Decode base64 to bytes
    const binaryString = atob(base64Text);
    // Convert binary string to Uint8Array
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    // Decode UTF-8 bytes to string with error handling
    const decoder = new TextDecoder('utf-8', { fatal: true });
    const decodedString = decoder.decode(bytes);
    // Additional validation: check if the result contains valid characters
    if (decodedString.includes('\uFFFD')) {
      console.warn('Decoded string contains replacement characters, indicating invalid UTF-8');
      return '';
    }
    return decodedString;
  } catch (error) {
    if (error instanceof DOMException) {
      console.error('Invalid base64 string:', error.message);
    } else if (error instanceof TypeError) {
      console.error('Invalid UTF-8 sequence:', error.message);
    } else {
      console.error('Error decoding base64:', error);
    }
    return '';
  }
}

function InvitationContent() {
  const guestName = decodeBase64Utf8(useSearchParams().get('id') || '');
  const getGreeting = () => {
    if (guestName && guestName.trim()) {
      return (
        <>
          Hola, <strong>{guestName}</strong>!
        </>
      );
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

export default function Invitation() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InvitationContent />
    </Suspense>
  );
}
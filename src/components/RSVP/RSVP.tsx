'use client';

import React, { Suspense, useState, useRef, useEffect } from 'react';
import styles from './RSVP.module.css';
import { Section } from '../Section/Section';
import { Form } from './Form';
import { SuccessPage } from './SuccessPage';


const RSVPContent: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const successMessageRef = useRef<HTMLDivElement>(null);

  // Smooth scroll to success message when it appears
  useEffect(() => {
    if (showSuccess && successMessageRef.current) {
      successMessageRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [showSuccess]);

  return (
    <Section
      id="confirmacio"
      title="CONFIRMACIÓ D&apos;ASSISTÈNCIA"
      style="secondary-light"
      dark={true}
    >
      <div className={styles.rsvpContent}>
        {!showSuccess ? (
          <Form setShowSuccess={setShowSuccess} />
        ) : (
          <SuccessPage successMessageRef={successMessageRef} />
        )}
      </div>
    </Section>
  );
};

export default function RSVP() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RSVPContent />
    </Suspense>
  );
}
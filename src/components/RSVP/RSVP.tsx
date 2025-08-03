'use client';

import React, { useState } from 'react';
import styles from './RSVP.module.css';
import { Input } from '../Input/Input';
import Button from '../Button/Button';
import { Section } from '../Section/Section';

interface FormData {
  name: string;
  phone: string;
  children: string;
  accommodation: string;
  dietary: string;
  message: string;
}

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    children: '0',
    accommodation: 'yes',
    dietary: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState<{ show: boolean; message: string; type: 'error' | 'success' }>({ show: false, message: '', type: 'error' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9\s\+\-\(\)]{9,}$/;
    return phoneRegex.test(phone);
  };

  const showNotification = (message: string, type: 'error' | 'success' = 'error') => {
    setNotificationModal({ show: true, message, type });
    
    setTimeout(() => {
      setNotificationModal({ show: false, message: '', type: 'error' });
    }, 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.phone.trim()) {
      showNotification('Si us plau, ompliu tots els camps obligatoris.');
      return;
    }

    if (!validatePhone(formData.phone)) {
      showNotification('Si us plau, introduïu un nombre de telèfon vàlid (mínim 9 dígits)');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xeokybvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: '',
          phone: '',
          children: '0',
          accommodation: 'yes',
          dietary: '',
          message: ''
        });
        setShowSuccessModal(true);
        
        setTimeout(() => {
          setShowSuccessModal(false);
        }, 3000);
      } else {
        throw new Error('Error submitting form');
      }
    } catch {
      showNotification('Hi ha hagut un error. Si us plau, intenteu-ho de nou.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="confirmacio"
      title="CONFIRMACIÓ D&apos;ASSISTÈNCIA"
      style="secondary-light"
      dark={true}
    >
      <div className={styles.rsvpContent}>
        <p className={styles.rsvpIntro}>
          Si us plau, confirmeu la vostra assistència abans del <strong>1 d&apos;octubre de 2025</strong>.
        </p>
        
        <form className={styles.rsvpForm} onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Nom complet *"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Joan Pere"
            required
          />
          <Input
            type="tel"
            name="phone"
            label="Telèfon *"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Exemple: 666555444"
            required
          />

          <Input
            type="select"
            name="children"
            label="Nombre de nens"
            value={formData.children}
            onChange={handleChange}
            options={[
              { label: 'Cap nen', value: '0' },
              { label: '1 nen', value: '1' },
              { label: '2 nens', value: '2' },
              { label: '3 nens', value: '3' },
            ]}
          />

          <Input
            type="select"
            name="accommodation"
            label="Allotjament"
            value={formData.accommodation}
            onChange={handleChange}
            options={[
              { label: 'No em quedaré a dormir', value: 'no' },
              { label: 'Sí, em quedaré a dormir', value: 'yes' },
            ]}
          />

          <Input
            type="textarea"
            name="dietary"
            label="Requisits dietètics o al·lèrgies"
            value={formData.dietary}
            onChange={handleChange}
            placeholder="Indiqueu qualsevol al·lèrgia o requisit dietètic especial..."
          />

          <Input
            type="textarea"
            name="message"
            label="Missatge per als nuvis"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escriviu-nos un missatge..."
          />
          
          <Button type="submit" disabled={isSubmitting} onClick={() => {}}>
            {isSubmitting ? 'Enviant...' : 'Confirmar assistència'}
          </Button>
        </form>
      </div>
      
      {showSuccessModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>ENVIAT!</h3>
          </div>
        </div>
      )}
      
      {notificationModal.show && (
        <div className={styles.modal}>
          <div className={`${styles.modalContent} ${styles[notificationModal.type]}`}>
            <p>{notificationModal.message}</p>
          </div>
        </div>
      )}
    </Section>
  );
};

export default RSVP; 
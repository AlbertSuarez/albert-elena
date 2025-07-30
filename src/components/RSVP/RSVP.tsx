'use client';

import React, { useState } from 'react';
import styles from './RSVP.module.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  children: string;
  accommodation: string;
  dietary: string;
  message: string;
}

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    children: '0',
    accommodation: 'yes',
    dietary: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value.trim()
    }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9\s\+\-\(\)]{9,}$/;
    return phoneRegex.test(phone);
  };

  const showNotification = (message: string) => {
    // Simple notification - in a real app, you'd use a proper notification library
    alert(message);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone) {
      showNotification('Si us plau, ompliu tots els camps obligatoris.');
      return;
    }

    if (!validateEmail(formData.email)) {
      showNotification('Si us plau, introduïu un correu electrònic vàlid (exemple@correu.com)');
      return;
    }

    if (!validatePhone(formData.phone)) {
      showNotification('Si us plau, introduïu un número de telèfon vàlid (mínim 9 dígits)');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xdkzrryn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showNotification('Gràcies per la vostra confirmació!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          children: '0',
          accommodation: 'yes',
          dietary: '',
          message: ''
        });
        
        setTimeout(() => {
          window.location.href = '/thank-you.html';
        }, 1500);
      } else {
        throw new Error('Error submitting form');
      }
    } catch {
      showNotification('Hi ha hagut un error. Si us plau, intenteu-ho de nou.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="confirmacio" className={styles.rsvpSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Confirmació d&apos;assistència</h2>
        <div className={styles.rsvpContent}>
          <p className={styles.rsvpIntro}>
            Si us plau, confirmeu la vostra assistència abans del <strong>1 d&apos;octubre de 2025</strong>.
          </p>
          
          <form className={styles.rsvpForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nom complet *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Joan Pere"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Correu electrònic *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="exemple@correu.com"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="phone">Telèfon *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Exemple: 666555444"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="children">Nombre de nens</label>
              <select
                id="children"
                name="children"
                value={formData.children}
                onChange={handleChange}
              >
                <option value="0">Cap nen</option>
                <option value="1">1 nen</option>
                <option value="2">2 nens</option>
                <option value="3">3 nens</option>
                <option value="4">4 nens</option>
                <option value="5">5+ nens</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="accommodation">Allotjament</label>
              <select
                id="accommodation"
                name="accommodation"
                value={formData.accommodation}
                onChange={handleChange}
              >
                <option value="no">No em quedaré a dormir</option>
                <option value="yes">Sí, em quedaré a dormir</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="dietary">Requisits dietètics o al·lèrgies</label>
              <textarea
                id="dietary"
                name="dietary"
                value={formData.dietary}
                onChange={handleChange}
                rows={3}
                placeholder="Indiqueu qualsevol al·lèrgia o requisit dietètic especial..."
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Missatge per als nuvis</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Escriviu-nos un missatge..."
              />
            </div>
            
            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
              {isSubmitting ? 'Enviant...' : 'Confirmar assistència'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVP; 
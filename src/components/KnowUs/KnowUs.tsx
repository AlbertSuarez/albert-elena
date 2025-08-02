import React from 'react';
import styles from './KnowUs.module.css';
import { Title } from '../Title/Title';
import { Section } from '../Section/Section';

const KnowUs: React.FC = () => {
  return (
    <Section id="coneixe-ns-mes" title="CONEIXE&apos;NS MÉS" style="white">
      <div className={styles.knowUsContent}>
        <p className={styles.knowUsIntro}>
          Descobriu la nostra música de quan ens vam conèixer i les cançons que ens han acompanyat per tot el camí.
        </p>
        <div className={styles.spotifyEmbed}>
          <iframe 
            style={{borderRadius: '12px'}} 
            src="https://open.spotify.com/embed/playlist/4esJT76klkPxtDXnTkBa3r?utm_source=generator" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
          </iframe>
        </div>
      </div>
    </Section>
  );
};

export default KnowUs; 
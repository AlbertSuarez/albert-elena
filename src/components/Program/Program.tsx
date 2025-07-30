import React from 'react';
import styles from './Program.module.css';

interface TimelineItem {
  time: string;
  title: string;
  description: string;
}

const Program: React.FC = () => {
  const timelineData: TimelineItem[] = [
    {
      time: "12:30",
      title: "Arribada",
      description: "Rebuda dels convidats a Mas Muxach"
    },
    {
      time: "13:00",
      title: "Cerimònia",
      description: "Cerimònia de casament breu amb família i amics"
    },
    {
      time: "13:30",
      title: "Còctel",
      description: "Aperitius i begudes mentre fem fotos"
    },
    {
      time: "15:00",
      title: "Dinar",
      description: "Menú vegetarià de dos plats i postres"
    },
    {
      time: "18:00",
      title: "Festa",
      description: "Barra lliure amb música de DJ i ball"
    }
  ];

  return (
    <section id="programa" className={styles.programSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Programa del dia</h2>
        <div className={styles.timeline}>
          {timelineData.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineTime}>{item.time}</div>
              <div className={styles.timelineContent}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program; 
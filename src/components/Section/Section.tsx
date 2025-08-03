import { Title } from "../Title/Title";
import styles from './Section.module.css';

type SectionProps = {
  children: React.ReactNode;
  style?: 'white' | 'secondary' | 'primary' | 'secondary-light';
  title?: string;
  titleDirection?: 'left' | 'right';
  id: string;
  dark?: boolean;
}

export const Section = ({
  children,
  id,
  title,
  style = 'white',
  titleDirection = 'left',
  dark = false
}: SectionProps) => {
  return (
    <section id={id} className={`${styles.section} ${styles[style]}`}>
      <div className={styles.container}>
        {title && (
          <div className={styles.title}>
            <Title direction={titleDirection} condensed dark={dark}>{title}</Title>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
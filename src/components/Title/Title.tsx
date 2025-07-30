import styles from './Title.module.css';
import cx from 'classnames';

export const Title = ({ children, direction = 'left' }: { children: React.ReactNode, direction?: 'left' | 'right' }) => {
  return (
    <div className={cx(styles.container, styles[direction])}>
      <img src='/assets/images/figures/figura-titol.png' className={styles.icon} alt='Title icon' />
      <h2 className={styles.title}>{children}</h2>
    </div>
  );
};
import styles from './Title.module.css';
import cx from 'classnames';

export const Title = ({ children, direction = 'left', condensed = false }: { children: React.ReactNode, direction?: 'left' | 'right', condensed?: boolean }) => {
  return (
    <div className={cx(styles.container, styles[direction], {
      [styles.condensed]: condensed
    })}>
      <img src='/assets/images/figures/figura-titol.png' className={styles.icon} alt='Title icon' />
      <h2 className={styles.title}>{children}</h2>
    </div>
  );
};
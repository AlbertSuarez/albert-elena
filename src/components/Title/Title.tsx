import styles from './Title.module.css';
import cx from 'classnames';

type TitleProps = {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  condensed?: boolean;
  dark?: boolean;
}

export const Title = ({ children, direction = 'left', condensed = false, dark = false }: TitleProps) => {
  return (
    <div className={cx(styles.container, styles[direction], {
      [styles.condensed]: condensed
    })}>
      <img src={
        dark ? '/assets/images/figures/figura-titol-dark.png' : '/assets/images/figures/figura-titol.png'
      } className={styles.icon} alt='Title icon' />
      <h2 className={styles.title}>{children}</h2>
    </div>
  );
};
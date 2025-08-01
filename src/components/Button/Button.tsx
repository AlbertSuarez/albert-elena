import styles from './Button.module.css';

type ButtonProps = {
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: React.ReactNode;
}

export default function Button({ children, onClick, type='button', disabled }: ButtonProps) {
  return <button className={styles.button} onClick={onClick} type={type} disabled={disabled}>{children}</button>;
}
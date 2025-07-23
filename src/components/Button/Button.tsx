import styles from './Button.module.css';

export default function Button({ children, onClick }: { children: React.ReactNode, onClick: () => void }) {
  return <button className={styles.button} onClick={onClick}>{children}</button>;
}
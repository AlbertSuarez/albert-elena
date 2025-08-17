import Button from "../Button/Button";
import styles from "./Modal.module.css";

export default function Modal({ setShowSuccessModal }: { setShowSuccessModal: (show: boolean) => void }) {
  return (
    <div className={styles.modal}>
    <div className={styles.modalContent}>
      <button 
        className={styles.closeButton}
        onClick={() => setShowSuccessModal(false)}
        aria-label="Tancar modal"
      >
        ×
      </button>
      <h3>ENVIAT!</h3>
      <div className={styles.modalButtons}>
        <Button 
          onClick={() => window.open('https://calendar.app.google/wCPczjrVFBcAdusy8', '_blank')}
        >
          Afegeix al calendari
        </Button>
      </div>
    </div>
  </div>
  );
}
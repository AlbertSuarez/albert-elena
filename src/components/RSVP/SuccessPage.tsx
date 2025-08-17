import Button from "../Button/Button"
import styles from "./SucessPage.module.css"
import Confetti from "../Confetti/Confetti"
import AudioControl from "../AudioControl/AudioControl"
import { useEffect, useState } from "react"

export const SuccessPage = ({
  successMessageRef,
}: {
  successMessageRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showFlashes, setShowFlashes] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    // Show flashes for all users
    setShowFlashes(true);
  }, []);

  return (
    <>
      {showFlashes && <div className={styles.flashOverlay} />}
      <AudioControl 
        audioSrc="/assets/sounds/celebration.mp3"
        volume={0.5}
        autoPlay={true}
        onToggle={(value: boolean) => {
          setShowFlashes(value);
        }}
      />
      <div className={styles.successMessage} ref={successMessageRef}>
        <div className={styles.successIcon}>
          <div className={styles.imageWrapper}>
           <Confetti isActive={showConfetti} duration={10000} particleCount={12} />
            <img src="/assets/images/Oia-uia.webp" alt="OIA" />
          </div>
        </div>
        <h3 className={styles.successTitle}>Enviat!</h3>
        <p className={styles.successText}>
          Les teves dades han estat enviades correctament. T&apos;enviarem més novetats quan s&apos;apropi la data.
        </p>
        <div className={styles.successButton}>
          <Button 
            onClick={() => window.open('https://calendar.app.google/wCPczjrVFBcAdusy8', '_blank')}
          >
            <img src="/assets/images/icons/calendar.svg" alt="Calendar" />
            Afegeix al calendari
          </Button>
        </div>
      </div>
    </>
  )
}
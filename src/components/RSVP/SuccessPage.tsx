import Button from "../Button/Button"
import styles from "./SucessPage.module.css"
import Image from "next/image"

export const SuccessPage = ({
  successMessageRef,
}: {
  successMessageRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div className={styles.successMessage} ref={successMessageRef}>
    <div className={styles.successIcon}>
      <div className={styles.imageWrapper}>
        <Image 
          src="/assets/images/figures/enviat.png" 
          alt="Enviat" 
          width={180}
          height={180}
        />
      </div>
    </div>
    <h3 className={styles.successTitle}>Enviat!</h3>
    <p className={styles.successText}>
      Us anirem informant de més novetats quan s&apos;apropi la data! Mentres tant, pots afegir l&apos;esdeveniment al teu calendari per no oblidar la data.
    </p>
    <div className={styles.successButton}>
      <Button 
        onClick={() => window.open('https://calendar.app.google/wCPczjrVFBcAdusy8', '_blank')}
      >
        Afegeix al calendari
      </Button>
    </div>
  </div>
  )
}
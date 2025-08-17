import Button from "../Button/Button"
import styles from "./SucessPage.module.css"
import Image from "next/image"
import cx from "classnames"

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
  )
}
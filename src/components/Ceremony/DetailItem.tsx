import CalendarIcon from '../Icons/CalendarIcon';
import ClockIcon from '../Icons/ClockIcon';
import LocationIcon from '../Icons/LocationIcon';
import styles from './DetailItem.module.css';

interface DetailItemProps {
  icon: string;
  title: string;
  content: string;
}

export const DetailItem = ({ icon, title, content }: DetailItemProps) => {

  const Icon = ({ className }: { className: string }) => {
    switch (icon) {
      case 'calendar':
        return <CalendarIcon className={className} />;
      case 'clock':
        return <ClockIcon className={className} />;
      case 'location':
        return <LocationIcon className={className} />;
    }
  }

  return (
    <div className={styles.detailItem}>
      <div className={styles.detailItemIcon}>
        <img className={styles.background} src={`/assets/images/figures/figure-icon-background.png`} alt={title} />
        <Icon className={styles.icon}/>
      </div>
      <div className={styles.detailItemContent}>
        <span className={styles.title}>{title}</span>
        <span className={styles.content}>{content}</span>
      </div>
    </div>
  );
};
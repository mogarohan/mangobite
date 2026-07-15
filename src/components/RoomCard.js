import { Check } from 'lucide-react';
import styles from './RoomCard.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function RoomCard({ title, description, amenities, imageSrc, price }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {imageSrc ? (
          <Image src={imageSrc} alt={title} fill className={styles.image} />
        ) : (
          <div className={styles.placeholderImage}>Room Image</div>
        )}
        <div className={styles.priceTag}>{price}</div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.amenities}>
          <h4>Room Amenities</h4>
          <ul>
            {amenities.map((amenity, index) => (
              <li key={index}>
                <Check size={16} className={styles.checkIcon} />
                {amenity}
              </li>
            ))}
          </ul>
        </div>
        
        <div className={styles.footer}>
          <Link href="/contact" className={styles.bookButton}>Check Availability</Link>
        </div>
      </div>
    </div>
  );
}

import { fullMenuData } from '@/data/menuData';
import MenuGallery from '@/components/MenuGallery';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Our Menu | Mango Bite Restaurant',
  description: 'Explore the pure-vegetarian multi-cuisine menu at Mango Bite Restaurant, featuring North Indian, South Indian, Chinese, and Fast Food delicacies.',
};

export default function MenuPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image 
          src="/images/kutchi_restaurant.jpg" 
          alt="Mango Bite Restaurant" 
          fill 
          className={styles.heroBg}
        />
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent} animate-fade-in-up`}>
          <h1 className={styles.heroTitle}>A Culinary Journey</h1>
          <p style={{ fontSize: '1.2rem', fontWeight: '300', opacity: '0.9' }}>
            Discover our rich, pure-vegetarian multi-cuisine menu crafted with authentic flavors.
          </p>
        </div>
      </section>

      <div className={`container ${styles.menuContainer}`}>
        <MenuGallery menuData={fullMenuData} />
      </div>
    </>
  );
}

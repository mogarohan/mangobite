import { fullMenuData } from '@/data/menuData';
import MenuGallery from '@/components/MenuGallery';
import styles from './page.module.css';

export default function MenuPage() {
  return (
    <div className={`container ${styles.menuContainer}`}>
      <div className={styles.header}>
        <h1 className="section-title">Interactive Menu Gallery</h1>
        <p className={styles.headerSubtitle}>
          Select a category below to explore our complete authentic pure-vegetarian menu.
        </p>
      </div>

      <MenuGallery menuData={fullMenuData} />
    </div>
  );
}

"use client";
import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import styles from './MenuGallery.module.css';

export default function MenuGallery({ menuData }) {
  const [activeCategory, setActiveCategory] = useState(null);

  if (activeCategory) {
    // Detail View
    return (
      <div className={`${styles.detailView} animate-fade-in-up`}>
        <button 
          className={`btn btn-outline ${styles.backBtn}`}
          onClick={() => setActiveCategory(null)}
        >
          <ArrowLeft size={18} style={{ marginRight: '8px' }} />
          Back to Categories
        </button>

        <div className={styles.categoryHeroDetail}>
          <Image 
            src={activeCategory.image || '/images/custom_restaurant.jpg'} 
            alt={activeCategory.name} 
            fill 
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}>
            <h2 className={styles.detailTitle}>{activeCategory.name}</h2>
          </div>
        </div>

        <div className={styles.itemsWrapper}>
          <ul className={styles.itemList}>
            {activeCategory.items.map((item, i) => (
              <li key={i} className={styles.itemRow}>
                <span className={styles.itemName}>{item.name}</span>
                <span className={styles.itemDots}></span>
                <span className={styles.itemPrice}>₹{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // Gallery View
  return (
    <div className={styles.galleryGrid}>
      {menuData.map((category) => (
        <div 
          key={category.id} 
          className={`card ${styles.galleryCard}`}
          onClick={() => setActiveCategory(category)}
        >
          <div className={styles.cardImageWrapper}>
            <Image 
              src={category.image || '/images/custom_restaurant.jpg'} 
              alt={category.name} 
              fill 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.cardImage}
            />
            <div className={styles.cardOverlay}>
              <h3 className={styles.cardTitle}>{category.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

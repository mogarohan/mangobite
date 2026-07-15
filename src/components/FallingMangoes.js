"use client";

import { useEffect, useState } from 'react';
import styles from './FallingMangoes.module.css';

export default function FallingMangoes() {
  const [mangoes, setMangoes] = useState([]);

  useEffect(() => {
    // Generate an array of 20 mangoes/leaves for a richer effect
    const generatedMangoes = Array.from({ length: 20 }).map((_, i) => {
      const left = Math.floor(Math.random() * 100);
      const duration = Math.floor(Math.random() * 20) + 12; // Slower, elegant fall
      const delay = Math.floor(Math.random() * 20);
      
      // Sizes from small (far) to large (near)
      const sizeIndex = Math.random();
      let size, depthClass;
      
      if (sizeIndex < 0.33) {
        size = Math.floor(Math.random() * 10) + 12; // Far away (small)
        depthClass = styles.depthFar;
      } else if (sizeIndex < 0.66) {
        size = Math.floor(Math.random() * 15) + 22; // Mid distance
        depthClass = styles.depthMid;
      } else {
        size = Math.floor(Math.random() * 20) + 35; // Near (large)
        depthClass = styles.depthNear;
      }

      const animationClasses = [styles.animSway, styles.animSpin, styles.animStraight];
      const animClass = animationClasses[Math.floor(Math.random() * animationClasses.length)];
      
      // Assortment of elements: Mangoes and different leaves
      const elements = ['🥭', '🥭', '🍃', '🍂', '🌿'];
      const icon = elements[Math.floor(Math.random() * elements.length)];

      return (
        <div 
          key={i} 
          className={`${styles.mango} ${depthClass} ${animClass}`}
          style={{
            left: `${left}vw`,
            animationDuration: `${duration}s`,
            animationDelay: `-${delay}s`,
            fontSize: `${size}px`
          }}
        >
          {icon}
        </div>
      );
    });

    setMangoes(generatedMangoes);
  }, []);

  if (mangoes.length === 0) return null;

  return (
    <div className={styles.mangoContainer}>
      {mangoes}
    </div>
  );
}
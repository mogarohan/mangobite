import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Gallery | Mango Bite Hotel & Restaurant',
  description: 'Explore the visual journey of Mango Bite Hotel & Restaurant. View photos of our premium rooms, multi-cuisine restaurant, and beautiful exterior.',
};

export default function Gallery() {
  const images = [
    { src: '/images/hotel_hero.jpg', title: 'Hotel Exterior & Ambiance' },
    { src: '/images/kutchi_suite.jpg', title: 'Premium Suite Room' },
    { src: '/images/kutchi_restaurant.jpg', title: 'Multi-Cuisine Restaurant' },
    { src: '/images/kutchi_deluxe_room.jpg', title: 'Deluxe Heritage Room' },
    { src: '/images/mandvi-landscape.jpg', title: 'Beautiful Mandvi Surroundings' },
    { src: '/images/menu_indian.jpg', title: 'Authentic Indian Cuisine' },
    { src: '/images/kutchi_super_deluxe.jpg', title: 'Super Deluxe Comfort' },
    { src: '/images/menu_chinese.jpg', title: 'Wok Tossed Chinese Delicacies' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image 
          src="/images/hotel_hero.jpg" 
          alt="Mango Bite Gallery" 
          fill 
          className={styles.heroBg}
        />
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent} animate-fade-in-up`}>
          <h1 className={styles.heroTitle}>A Glimpse of Luxury</h1>
          <p style={{ fontSize: '1.2rem', fontWeight: '300', opacity: '0.9' }}>
            Take a visual tour of our beautifully crafted spaces and vibrant culinary offerings.
          </p>
        </div>
      </section>

      {/* Masonry Gallery Grid */}
      <section className="section bg-light">
        <div className="container">
          <div className={styles.galleryGrid}>
            {images.map((img, index) => (
              <div key={index} className={styles.galleryItem}>
                <Image 
                  src={img.src}
                  alt={img.title}
                  fill
                  className={styles.galleryImage}
                />
                <div className={styles.itemOverlay}>
                  <h3 className={styles.itemTitle}>{img.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem', padding: '4rem 0', borderTop: '1px solid var(--border)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--dark)' }}>Like what you see?</h2>
            <Link href="/rooms" className="btn btn-primary" style={{ marginRight: '1rem' }}>
              Explore Rooms
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Book Your Stay
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

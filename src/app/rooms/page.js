import RoomCard from '@/components/RoomCard';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Our Premium Rooms | Mango Bite Hotel & Restaurant',
  description: 'Discover the luxurious room types available at Mango Bite Hotel & Restaurant in Mandvi Kutch, featuring traditional artistry and modern comfort.',
};

export default function Rooms() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image 
          src="/images/kutchi_suite.jpg" 
          alt="Premium Suite at Mango Bite" 
          fill 
          className={styles.heroBg}
        />
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent} animate-fade-in-up`}>
          <h1 className={styles.heroTitle}>Heritage Luxury Rooms</h1>
          <p className={styles.heroSubtitle}>
            Experience authentic Kutchi artistry seamlessly blended with world-class modern comfort. Your unforgettable stay in Mandvi begins here.
          </p>
        </div>
      </section>

      {/* Main Rooms Content */}
      <section className="section bg-light">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
            <p>
              At Mango Bite Hotel & Restaurant, we offer meticulously designed rooms tailored to meet the needs of every traveler. Check detailed room features, view images, and find the perfect space for your relaxing getaway.
            </p>
            <p style={{ marginTop: '1rem', fontWeight: '500', color: 'var(--dark)' }}>
              Check-In: 12 PM | Check-Out: 12 PM
            </p>
          </div>

          <div className={styles.roomsGrid}>
            <RoomCard 
              title="Deluxe Room"
              description="A beautiful, well-appointed room featuring all basic modern amenities. Perfect for couples or single travelers looking for a cozy and elegant stay."
              amenities={['Air Conditioning', 'Free High-Speed Wi-Fi', 'Premium Toiletries', 'Mineral Water (Paid)']}
              imageSrc="/images/kutchi_deluxe_room.jpg"
              price="From ₹2,500/night"
            />
            <RoomCard 
              title="Super Deluxe Room"
              description="Experience enhanced comfort with additional space and exquisite Lippan mud wall art. Some of these rooms come with a beautiful balcony to relax."
              amenities={['Private Balcony (Subject to availability)', 'Air Conditioning', 'Free High-Speed Wi-Fi', 'Bathtub (Subject to availability)']}
              imageSrc="/images/kutchi_super_deluxe.jpg"
              price="From ₹3,500/night"
            />
            <RoomCard 
              title="Suite Room"
              description="Our most luxurious offering, featuring a private terrace, a premium lounge area, and rich Indigo & Terracotta furnishings for a truly majestic experience."
              amenities={['Private Terrace', 'Lounge Access', 'Plush Bathtub', 'Premium Room Service']}
              imageSrc="/images/kutchi_suite.jpg"
              price="From ₹5,000/night"
            />
          </div>
        </div>
      </section>

      {/* High-Impact Booking CTA */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaContent}`}>
          <h2 className={styles.ctaTitle}>Ready for a Memorable Stay?</h2>
          <p className={styles.ctaSubtitle}>
            Our premium heritage rooms are in high demand. Reserve your space today to experience the finest hospitality in Mandvi, Kutch.
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            Book Your Stay Now
          </Link>
        </div>
      </section>
    </>
  );
}

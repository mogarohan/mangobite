import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Coffee, BedDouble, Calendar, Users, PhoneCall } from 'lucide-react';
import styles from './page.module.css';
import RoomCard from '@/components/RoomCard';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <video
          autoPlay
          muted
          playsInline
          className={styles.heroBgImage}
        >
          <source src="/videos/a.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent} animate-fade-in-up`}>
          <h1 className={styles.heroTitle}>
            Experience Authentic Kutch Heritage at <span className={styles.highlight}>Mango Bite</span>
          </h1>
          <p className={styles.heroSubtitle}>
            A premium pure-vegetarian hotel & multi-cuisine restaurant in Mandvi, blending modern luxury with traditional artistry.
          </p>
          <div className={styles.heroActions}>
            <Link href="/rooms" className="btn btn-primary">
              Book a Room <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link href="/menu" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
              Explore Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Features Overview with Kutchi Pattern */}
      <section className="section bg-light bg-kutchi-pattern">
        <div className="container">
          <div className={styles.featuresGrid}>
            <div className={`card ${styles.featureCard}`}>
              <div className={styles.featureIcon}><MapPin size={40} /></div>
              <h3>Prime Location</h3>
              <p>Located on Mandvi Highway in Maska, just 3.4 km from the beautiful Mandvi Beach.</p>
            </div>
            <div className={`card ${styles.featureCard}`}>
              <div className={styles.featureIcon}><Coffee size={40} /></div>
              <h3>Multi-Cuisine Restaurant</h3>
              <p>A vibrant dining experience offering authentic North Indian, South Indian, and Continental flavors.</p>
            </div>
            <div className={`card ${styles.featureCard}`}>
              <div className={styles.featureIcon}><BedDouble size={40} /></div>
              <h3>Heritage Rooms</h3>
              <p>Rooms featuring traditional Lippan art and modern amenities for an unforgettable stay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Section (Kake Di Hatti Inspired) */}
      <section className={`section ${styles.restaurantWrapper}`}>
        {/* Animated Mango Decorations */}
        <img src="/images/keri.png?v=5" alt="Mango Decoration" className={styles.keriDecoration} />
        <img src="/images/keri.png?v=5" alt="Mango Decoration 2" className={styles.keriDecoration2} />

        <div className={`container ${styles.restaurantSection}`}>
          <div className={styles.restaurantContent}>
            <h4 className={styles.sectionEyebrow}>Culinary Excellence</h4>
            <h2 className="section-title" style={{ textAlign: 'left', left: '0', transform: 'none', marginBottom: '1rem' }}>
              The Mango Bite Experience
            </h2>
            <p className={styles.descriptionText}>
              Indulge in a culinary journey at our highly rated, pure-vegetarian multi-cuisine restaurant. Inspired by legendary Indian eateries, we offer a vibrant, rich, and modern dining atmosphere. Enjoy our signature dishes surrounded by traditional Kutchi colors and warm hospitality.
            </p>
            <Link href="/menu" className="btn btn-primary" style={{ marginTop: '2rem' }}>
              Explore Our Menu
            </Link>
          </div>
          <div className={styles.restaurantImageWrapper}>
            <Image 
              src="/images/kutchi_restaurant.jpg" 
              alt="Mango Bite Restaurant Interior" 
              fill 
              className={styles.roundedImage}
            />
            <div className={styles.experienceBadge}>
              <span className={styles.badgeNumber}>10+</span>
              <span className={styles.badgeText}>Years of Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Scrolling Menu Marquee */}
      <section className={styles.marqueeSection}>
        <div className="container" style={{ marginBottom: '2rem' }}>
          <h2 className="section-title">Our Menu Specialties</h2>
        </div>
        <div className={styles.marqueeContainer}>
          {/* Track 1 */}
          <div className={styles.marqueeTrack}>
            <Link href="/menu" className={styles.marqueeItem}>
              <Image src="/images/menu_indian.jpg" alt="North Indian" fill className={styles.marqueeImage} />
              <div className={styles.marqueeOverlay}>
                <h3>North Indian</h3>
                <p>Rich, buttery, and authentic flavors.</p>
              </div>
            </Link>
            <Link href="/menu" className={styles.marqueeItem}>
              <Image src="/images/menu_southindian.jpg" alt="South Indian" fill className={styles.marqueeImage} />
              <div className={styles.marqueeOverlay}>
                <h3>South Indian</h3>
                <p>Crispy dosas and authentic chutneys.</p>
              </div>
            </Link>
            <Link href="/menu" className={styles.marqueeItem}>
              <Image src="/images/menu_chinese.jpg" alt="Chinese" fill className={styles.marqueeImage} />
              <div className={styles.marqueeOverlay}>
                <h3>Chinese</h3>
                <p>Spicy, tangy, and perfectly wok-tossed.</p>
              </div>
            </Link>
            <Link href="/menu" className={styles.marqueeItem}>
              <Image src="/images/menu_fastfood.jpg" alt="Fast Food" fill className={styles.marqueeImage} />
              <div className={styles.marqueeOverlay}>
                <h3>Fast Food</h3>
                <p>Quick bites to satisfy your cravings.</p>
              </div>
            </Link>
          </div>
          {/* Track 2 (Duplicate for seamless infinite scroll) */}
          <div className={styles.marqueeTrack} aria-hidden="true">
            <Link href="/menu" className={styles.marqueeItem}>
              <Image src="/images/menu_indian.jpg" alt="North Indian" fill className={styles.marqueeImage} />
              <div className={styles.marqueeOverlay}>
                <h3>North Indian</h3>
                <p>Rich, buttery, and authentic flavors.</p>
              </div>
            </Link>
            <Link href="/menu" className={styles.marqueeItem}>
              <Image src="/images/menu_southindian.jpg" alt="South Indian" fill className={styles.marqueeImage} />
              <div className={styles.marqueeOverlay}>
                <h3>South Indian</h3>
                <p>Crispy dosas and authentic chutneys.</p>
              </div>
            </Link>
            <Link href="/menu" className={styles.marqueeItem}>
              <Image src="/images/menu_chinese.jpg" alt="Chinese" fill className={styles.marqueeImage} />
              <div className={styles.marqueeOverlay}>
                <h3>Chinese</h3>
                <p>Spicy, tangy, and perfectly wok-tossed.</p>
              </div>
            </Link>
            <Link href="/menu" className={styles.marqueeItem}>
              <Image src="/images/menu_fastfood.jpg" alt="Fast Food" fill className={styles.marqueeImage} />
              <div className={styles.marqueeOverlay}>
                <h3>Fast Food</h3>
                <p>Quick bites to satisfy your cravings.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Rooms (Fern Residency Inspired) */}
      <section className={`section ${styles.roomsSectionWithBg}`}>
        <div className={styles.roomsSectionOverlay}></div>
        <div className={`container ${styles.roomsContentContainer}`}>
          <h2 className="section-title">Premium Heritage Rooms</h2>
          <div className={styles.roomsGrid}>
            <RoomCard 
              title="Deluxe Room"
              description="A beautiful blend of traditional Kutchi textiles and modern comfort."
              amenities={['Air Conditioning', 'Free Wi-Fi', 'Mineral Water']}
              imageSrc="/images/kutchi_deluxe_room.jpg"
            />
            <RoomCard 
              title="Super Deluxe Room"
              description="Spacious comfort featuring exquisite Lippan mud wall art and premium furnishings."
              amenities={['Balcony', 'Air Conditioning', 'Free Wi-Fi', 'Bathtub']}
              imageSrc="/images/kutchi_super_deluxe.jpg"
            />
            <RoomCard 
              title="Suite Room"
              description="Our most luxurious offering with rich Indigo and Terracotta decor and a private lounge."
              amenities={['Terrace', 'Lounge Access', 'Bathtub', 'Premium Services']}
              imageSrc="/images/kutchi_suite.jpg"
            />
          </div>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/rooms" className="btn btn-secondary">View All Rooms</Link>
          </div>
        </div>
      </section>
    </>
  );
}

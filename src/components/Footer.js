import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        {/* Brand & About */}
        <div className={styles.footerSection}>
          <Link href="/" className={styles.logo}>
            Mango Bite
            <span className={styles.logoSubtitle}>Hotel & Restaurant</span>
          </Link>
          <p className={styles.aboutText}>
            A premium pure-vegetarian hotel and multi-cuisine restaurant located in Maska, Gujarat. Just 3.4 km from Mandvi Beach, offering an unforgettable stay and dining experience.
          </p>
          <div className={styles.socials}>
            {/* Social links disabled temporarily due to missing icons */}
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.footerSection}>
          <h4 className={styles.footerHeading}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/rooms">Our Rooms</Link></li>
            <li><Link href="/facilities">Facilities</Link></li>
            <li><Link href="/menu">Restaurant Menu</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.footerSection}>
          <h4 className={styles.footerHeading} style={{ color: 'white' }}>Contact Us</h4>
          <ul className={styles.contactList}>
            <li>
              <MapPin size={20} className={styles.contactIcon} />
              <span>Mandvi Highway, Maska, Gujarat</span>
            </li>
            <li>
              <Phone size={20} className={styles.contactIcon} />
              <span>+91 99999 99999 (Booking)</span>
            </li>
            <li>
              <Mail size={20} className={styles.contactIcon} />
              <span>info@mangobitehotel.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Mango Bite Hotel & Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

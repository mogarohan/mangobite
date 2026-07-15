"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logoLink} onClick={closeMenu}>
          {/* We use a text logo for now, or you can add the actual image logo later */}
          <span className={styles.logoText}>THE <span className={styles.highlight}>MANGO</span> BITE</span>
        </Link>
        
        {/* Hamburger Icon */}
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Links */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.navOpen : ''}`}>
          <li><Link href="/" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/about" onClick={closeMenu}>About Us</Link></li>
          <li><Link href="/rooms" onClick={closeMenu}>Rooms</Link></li>
          <li><Link href="/menu" onClick={closeMenu}>Menu</Link></li>
          <li><Link href="/facilities" onClick={closeMenu}>Facilities</Link></li>
          <li><Link href="/gallery" onClick={closeMenu}>Gallery</Link></li>
          <li><Link href="/contact" className="btn btn-primary" onClick={closeMenu}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

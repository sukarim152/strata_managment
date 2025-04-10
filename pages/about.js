// pages/about.js
import styles from '../styles/about.module.css';
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link> | 
        <Link href="/services">Services</Link> | 
        <Link href="/contact">Contact</Link>
      </nav>

      <h1 className={styles.title}>About Us</h1>
      <p className={styles.paragraph}>
        We manage strata properties with care and professionalism.
      </p>
    </div>
  );
}

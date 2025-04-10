// pages/privacy.js
import Link from 'next/link';
import styles from './privacy.module.css';

export default function Privacy() {
  return (
    <div className={styles.container}>
      <h1>Privacy Policy</h1>
      <p>We value your privacy. Here's how we protect your personal data...</p>

      <Link href="/">Back to Home</Link>
    </div>
  );
}

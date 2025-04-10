// pages/terms.js
import Link from 'next/link';
import styles from './terms.module.css';

export default function Terms() {
  return (
    <div className={styles.container}>
      <h1>Terms and Conditions</h1>
      <p>By using our services, you agree to the following terms...</p>

      <Link href="/">Back to Home</Link>
    </div>
  );
}

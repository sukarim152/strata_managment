// pages/services.js
import Link from 'next/link';
import styles from './services.module.css';

export default function Services() {
  return (
    <div className={styles.container}>
      <h1>Our Services</h1>
      <ul>
        <li>Building Maintenance</li>
        <li>Tenant Communication</li>
        <li>Legal Compliance</li>
        <li>Financial Management</li>
      </ul>
      <Link href="/">Back to Home</Link>
    </div>
  );
}

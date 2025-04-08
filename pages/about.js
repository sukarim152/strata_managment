import Link from 'next/link';
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About Strata Management</h1>
      <p>We manage your strata buildings efficiently, ensuring peace of mind for all residents.</p>

      <Link href="/">Back to Home</Link>
    </div>
  );
}
}

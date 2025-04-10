import Link from 'next/link';

export default function Services() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link> | 
        <Link href="/about">About</Link> | 
        <Link href="/contact">Contact</Link> | 
        <Link href="/terms">Terms</Link> | 
        <Link href="/privacy">Privacy</Link>
      </nav>

      <h1>Our Services</h1>
      <p>We offer maintenance scheduling, document storage, meeting coordination, and financial reporting for your strata community.</p>
    </div>
  );
}

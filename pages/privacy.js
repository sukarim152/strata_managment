import Link from 'next/link';

export default function Privacy() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link> | 
        <Link href="/about">About</Link> | 
        <Link href="/services">Services</Link> | 
        <Link href="/contact">Contact</Link> | 
        <Link href="/terms">Terms</Link>
      </nav>

      <h1>Privacy Policy</h1>
      <p>Your data is kept secure. We do not share personal information with third parties.</p>
    </div>
  );
}

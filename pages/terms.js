import Link from 'next/link';

export default function Terms() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link> | 
        <Link href="/about">About</Link> | 
        <Link href="/services">Services</Link> | 
        <Link href="/contact">Contact</Link> | 
        <Link href="/privacy">Privacy</Link>
      </nav>

      <h1>Terms & Conditions</h1>
      <p>All users must adhere to strata management guidelines. Service terms apply.</p>
    </div>
  );
}

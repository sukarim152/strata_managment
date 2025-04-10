// pages/about.js
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link> | 
        <Link href="/services">Services</Link> | 
        <Link href="/contact">Contact</Link>
      </nav>

      <h1>About Us</h1>
      <p>We manage strata properties with care and professionalism.</p>
    </div>
  );
}

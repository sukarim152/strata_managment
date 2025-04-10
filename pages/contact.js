import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link> | 
        <Link href="/about">About</Link> | 
        <Link href="/services">Services</Link> | 
        <Link href="/terms">Terms</Link> | 
        <Link href="/privacy">Privacy</Link>
      </nav>

      <h1>Contact Us</h1>
      <p>Email: support@stratamanagement.com</p>
      <p>Phone: (02) 1234 5678</p>
    </div>
  );
}

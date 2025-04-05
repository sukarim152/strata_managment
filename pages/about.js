import Link from 'next/link';

export default function About() {
  return (
    <div>
      {/* Navigation links at the top of the page */}
      <nav>
        <Link href="/">Home</Link> | 
        <Link href="/about">About</Link> | 
        <Link href="/services">Services</Link> | 
        <Link href="/contact">Contact</Link>
      </nav>

      {/* Page content */}
      <h1>About Our Strata Management</h1>
      <p>We are committed to excellent management and providing a great experience for our residents. Learn more about our services and how we manage our properties effectively.</p>
    </div>
  );
}

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link> | 
        <Link href="/about">About</Link> | 
        <Link href="/services">Services</Link> | 
        <Link href="/contact">Contact</Link>
      </nav>

      <h1>Welcome to Strata Management</h1>
      <p>Manage your building efficiently.</p>
      <img src="/tiger.jpg" alt="tiger" width="300" />
      <p>
        For help, email us at:{" "}
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
      </p>   
    </div>
  );
}

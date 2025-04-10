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
      <form method="POST" action="/api/contact">
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" required /><br />

        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" required /><br />

        <label htmlFor="message">Message:</label><br />
        <textarea id="message" name="message" required></textarea><br />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}


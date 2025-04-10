// pages/contact.js
import Link from 'next/link';
import { useState } from 'react';
import styles from './contact.module.css';

export default function Contact() {
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple logic to "send" the message
    setMessage('');
    setSent(true);
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          rows="5"
          required
        />
        <button type="submit">Send</button>
      </form>
      {sent && <p>Your message has been sent!</p>}

      <Link href="/">Back to Home</Link>
    </div>
  );
}

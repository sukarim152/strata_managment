export default function Home() {
  const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL;

  return (
    <div>
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


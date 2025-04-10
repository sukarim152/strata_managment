export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    console.log('Received message:', { name, email, message });

    // Respond with a redirect (302 Found)
    res.writeHead(302, { Location: '/thank-you' });
    res.end();
  } else {
    // Only accept POST requests
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

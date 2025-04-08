export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req) {
  const { method } = req;

  if (method === 'POST') {
    const body = await req.json();
    // Log or store the maintenance request
    return new Response(
      JSON.stringify({ message: `Request received for: ${body.issue}` }),
      { status: 200 }
    );
  }

  return new Response(JSON.stringify({ error: 'Only POST allowed' }), {
    status: 405,
  });
}

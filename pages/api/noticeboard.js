export const config = {
  runtime: 'experimental-edge',
};

export default function handler() {
  const posts = [
    { date: "2025-04-08", message: "Lift maintenance this Friday" },
    { date: "2025-04-05", message: "Annual General Meeting next week" },
  ];

  return new Response(JSON.stringify(posts), {
    headers: { "Content-Type": "application/json" },
  });
}

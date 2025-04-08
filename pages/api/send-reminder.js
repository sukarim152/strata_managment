export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req) {
  // In real apps, fetch emails from DB and send them
  return new Response(JSON.stringify({
    status: "Reminder sent to all owners for upcoming meeting."
  }));
}

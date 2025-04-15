// app/api/send/route.js

import { sendFakeTransaction } from '../../../backend/sendToQueue';

export async function POST(req) {
  const data = await req.json();

  try {
    await sendFakeTransaction(data);
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Failed to send to SQS:', err);
    return new Response(JSON.stringify({ error: 'Failed to send to queue' }), { status: 500 });
  }
}

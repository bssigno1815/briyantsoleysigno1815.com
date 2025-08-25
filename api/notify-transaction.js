export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  try {
    const token = req.headers['x-secret-token'];
    if (token !== process.env.SECRET_TOKEN) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { message } = req.body || {};
    const from = process.env.TWILIO_FROM;
    const raw = (process.env.ADMIN_NUMBERS || '').split(',').map(s => s.trim()).filter(Boolean);

    if (!from || raw.length === 0) {
      return res.status(400).json({ error: 'Missing TWILIO_FROM or ADMIN_NUMBERS' });
    }
    const auth = Buffer.from(
      `${process.env.TWILIO_ACCOUNT_SID}:${process.env.TWILIO_AUTH_TOKEN}`
    ).toString('base64');

    const results = [];
    for (const to of raw) {
      const form = new URLSearchParams({ To: to, From: from, Body: message || 'Nouvo tranzaksyon sou BSS 1815' });
      const r = await fetch(
        `https://api.twilio.com/2010-04-01/Accounts/${process.env.TWILIO_ACCOUNT_SID}/Messages.json`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Basic ${auth}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: form
        }
      );
      const data = await r.json();
      results.push({ to, status: r.status, sid: data.sid, error: data.message });
    }
    return res.status(200).json({ ok: true, results });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}

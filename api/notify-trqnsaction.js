// api/notify-transaction.js
const twilio = require("twilio");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }
  const secret = req.headers["x-secret"];
  if (!secret || secret !== process.env.SECRET_TOKEN) {
    return res.status(401).json({ ok: false, error: "Unauthorized" });
  }

  const { id, amount, currency = "USD", vendor, customer, note } = req.body || {};
  if (!id || !amount) {
    return res.status(400).json({ ok: false, error: "Missing id or amount" });
  }

  const msg =
    `🧾 Transaksyon #${id}\n` +
    `Montan: ${amount} ${currency}\n` +
    (vendor ? `Machann: ${vendor}\n` : "") +
    (customer ? `Kliyan: ${customer}\n` : "") +
    (note ? `Nòt: ${note}\n` : "") +
    `⏰ ${new Date().toLocaleString("ht-HT")}`;

  const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  const from = process.env.TWILIO_FROM;
  const numbers = (process.env.ADMIN_NUMBERS || "")
    .split(",").map(s => s.trim()).filter(Boolean);

  try {
    await Promise.all(numbers.map(n => client.messages.create({ to: n, from, body: msg })));
    return res.status(200).json({ ok: true, sentTo: numbers.length });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: "Twilio send failed" });
  }
};

import Head from "next/head";

export default function Store3() {
  const products = [
    {
      name: "Mayo",
      price: 25,
      img: "/mayo.jpg",
      note: "Koulè: Nwa oswa Abriko fonse • Gwosè: S/M/L/XL/XXL",
    },
    {
      name: "Tchatcha",
      price: 15,
      img: "/tchatcha.jpg",
      note: "Koulè: Nwa oswa Abriko fonse",
    },
    {
      name: "Braslè",
      price: 5,
      img: "/brasle.jpg",
      note: "Koulè: Nwa oswa Abriko fonse",
    },
    {
      name: "Godé pou Chalè",
      price: 10,
      img: "/gode.jpg",
      note: "Koulè: Nwa oswa Abriko fonse",
    },
    {
      name: "Kèpi",
      price: 15,
      img: "/kepi.jpg",
      note: "Koulè: Nwa oswa Abriko fonse • Gwosè: One Size",
    },
  ];

  const styles = {
    page: { margin: 0, minHeight: "100vh", background: "#E07A1F", color: "#000", fontFamily: "Arial, sans-serif" },
    header: { background: "#000", color: "#E07A1F", padding: 16, fontSize: 22, fontWeight: 800, textAlign: "center" },
    grid: { display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", padding: 20 },
    card: { background: "#fff", borderRadius: 12, width: 220, padding: 14, boxShadow: "0 6px 16px rgba(0,0,0,.15)", textAlign: "center" },
    img: { width: "100%", height: 140, objectFit: "cover", borderRadius: 10, background: "#f4f4f4" },
    name: { margin: "8px 0 0", fontWeight: 700 },
    price: { marginTop: 8, fontWeight: 800, color: "#E07A1F", fontSize: 18 },
    note: { marginTop: 6, fontSize: 12, opacity: 0.8 },
    btn: { display: "inline-block", background: "#25D366", color: "#fff", padding: "8px 12px", borderRadius: 8, textDecoration: "none", fontWeight: 700, marginTop: 10 },
  };

  const waLink = (p) =>
    "https://wa.me/13175381150?text=" +
    encodeURIComponent(`Bonjou BSS! Mwen vle achte ${p.name} — $${p.price}. ${p.note}`);

  return (
    <>
      <Head>
        <title>BSS Store 3</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={styles.page}>
        <header style={styles.header}>BSS Store 3 — Pwodwi Ofisyèl</header>

        <main style={styles.grid}>
          {products.map((p) => (
            <div key={p.name} style={styles.card}>
              <img src={p.img} alt={p.name} style={styles.img} />
              <h3 style={styles.name}>{p.name}</h3>
              <div style={styles.price}>${p.price}</div>
              <div style={styles.note}>{p.note}</div>
              <a href={waLink(p)} target="_blank" rel="noopener noreferrer" style={styles.btn}>
                Achte Kounye a sou WhatsApp
              </a>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}

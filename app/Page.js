export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #f97316 0%, #000 60%)',
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center'
    }}>
      <div>
        <h1 style={{ fontSize: 36, fontWeight: 800, color: '#000', background:'#f97316', padding:'10px 16px', borderRadius:12 }}>
          BRIYANT SOLEY 1815
        </h1>
        <p style={{ marginTop: 12, color: '#fff' }}>
          Orange & Black ✅ — Sit ap monte san paj blan.
        </p>
      </div>
    </main>
  );
}

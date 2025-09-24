import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        textAlign: "center",
        padding: "60px",
        background: "linear-gradient(to bottom, black, #fcae1e)",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <Image
        src="/logo.png" // put your logo file in /public/logo.png
        alt="BSS Logo"
        width={200}
        height={200}
      />
      <h1 style={{ fontSize: "2.5rem", marginTop: "20px", color: "#fcae1e" }}>
        BRIYANT SOLÈY SIGNO 1815
      </h1>
      <p style={{ fontSize: "1.5rem", marginTop: "10px" }}>
        Briyant Solèy se yon mountain, yon vision, yon limyè ki pap janm ka etenn.
      </p>
      <p style={{ marginTop: "10px" }}>
        Tout wouj jon abrikot e nwa, ni rad la.
      </p>
    </main>
  );
}

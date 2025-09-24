export default function Custom404() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000", // Black background
        color: "#f97316",   // Orange text
        display: "grid",
        placeItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>404</h1>
        <p style={{ fontSize: "1.25rem", color: "#fff" }}>
          Paj ou chèche a pa egziste
        </p>
        <p style={{ marginTop: "1rem", color: "#f97316" }}>
          Briyant Solèy toujou kléré ✨
        </p>
      </div>
    </main>
  );
}
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen p-12"
      style={{ background: "linear-gradient(to bottom, black, #fcae1e)" }}
    >
      <Image
        src="/logo.png"
        alt="BSS Logo"
        width={220}
        height={220}
      />
      
      <h1
        className="text-5xl font-bold mt-6 bg-clip-text text-transparent"
        style={{
          backgroundImage: "linear-gradient(to right, #fcae1e, #ff8800)",
        }}
      >
        BRIYANT SOLÈY SIGNO 1815
      </h1>
      
      <p className="text-xl mt-6 text-white max-w-2xl text-center leading-relaxed">
        Briyant Solèy se yon mountain, yon vision, yon limyè ki pap janm ka etenn.
      </p>
      
      <p className="text-lg mt-3 text-white opacity-90">
        Tout wouj jon abrikot e nwa, ni rad la.
      </p>
    </main>
  );
}

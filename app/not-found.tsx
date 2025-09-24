export default function NotFound() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen p-12"
      style={{ background: "linear-gradient(to bottom, black, #fcae1e)" }}
    >
      <h1
        className="text-6xl font-bold mb-6 bg-clip-text text-transparent"
        style={{
          backgroundImage: "linear-gradient(to right, #fcae1e, #ff8800)",
        }}
      >
        404 – Paj Pa Jwenn
      </h1>

      <p className="text-xl text-white text-center max-w-xl leading-relaxed mb-8">
        Ou rive sou yon paj ki pa egziste.  
        Tanpri tounen sou paj prensipal Briyant Solèy Signo 1815.
      </p>

      <a
        href="/"
        className="px-6 py-3 bg-black text-orange-400 rounded-xl font-semibold hover:bg-orange-500 hover:text-black transition"
      >
        🏠 Retounen lakay
      </a>
    </main>
  );
}

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>BRIYANT SOLÈY SIGNO 1815</title>
        <link rel="icon" href="/favicon.svg" />
        {/* Si w vle kenbe ansyen CSS la: */}
        <link rel="stylesheet" href="/style.css" />
        {/* Si w gen script ansyen yo, ou ka ajoute yo tou:
          <script src="/js/mon_script.js" defer></script>
        */}
      </Head>

      <main style={{fontFamily:"system-ui", padding:"2rem"}}>
        <h1 style={{marginBottom:8}}>BRIYANT SOLÈY SIGNO 1815</h1>
        <p style={{opacity:.8}}>Aprikot & nwa • Next.js ap mache.</p>
      </main>
    </>
  );
}

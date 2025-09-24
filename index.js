// import '@/styles/globals.css'
// import '@/styles/tailwind.css'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* DEBUG: force visibility */}
      <style jsx global>{`
        html, body { opacity: 1 !important; visibility: visible !important; }
        body { color: #eee !important; background: #111 !important; }
      `}</style>
    </>
  );
}

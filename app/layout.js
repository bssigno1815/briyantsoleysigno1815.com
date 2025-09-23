export const metadata = { title: 'BRIYANT SOLEY 1815', description: 'Site Oficial' };

export default function RootLayout({ children }) {
  return (
    <html lang="ht">
      <body style={{ background: '#000', color: '#fff', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}

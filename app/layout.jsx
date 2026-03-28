export const metadata = {
  title: "PAES M1 Trainer",
  description: "Entrenamiento interactivo PAES",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ fontFamily: "Arial, sans-serif", padding: 20 }}>
        {children}
      </body>
    </html>
  );
}

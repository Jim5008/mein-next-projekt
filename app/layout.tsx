import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Haargenau München | Ihr Friseursalon',
  description: 'Professionelle Haarschnitte, Färbungen und Styling für Damen und Herren in München. Jetzt Termin buchen!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
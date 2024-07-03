import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'User Connect',
  description:
    'Crea y visualiza perfiles de usuario con información básica, intereses y una sección de contacto.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-lt-installed="true" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

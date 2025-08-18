import type { Metadata } from 'next';
import React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Albert & Elena - Casament 11.04.26',
  description: 'Pàgina web del casament d\'Albert i Elena - 11 d\'abril de 2026 a Mas Muxach, Brunyola',
  robots: 'noindex, nofollow, noarchive, nosnippet, noimageindex',
  openGraph: {
    type: 'website',
    url: 'https://albertelena.wedding/',
    title: 'Albert & Elena - Casament 11.04.26',
    description: 'Ens casem l\'11 d\'abril de 2026 a Mas Muxach, Brunyola. Descobreix tots els detalls de la nostra celebració.',
    images: [
      {
        url: 'https://albertelena.wedding/assets/images/og.jpg',
        width: 2400,
        height: 1260,
        alt: 'Albert & Elena - Casament 11.04.26',
      },
    ],
    siteName: 'Albert & Elena - Casament',
    locale: 'ca_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Albert & Elena - Casament 11.04.26',
    description: 'Ens casem l\'11 d\'abril de 2026 a Mas Muxach, Brunyola. Descobreix tots els detalls de la nostra celebració.',
    images: ['https://albertelena.wedding/assets/images/og.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/assets/images/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj4KICA8cGF0aCBkPSJNMTYgMjguNWMtMS4yIDAtMi4zLTAuNS0zLjEtMS4zTDQuNyAxOS4xYy0zLjEtMy4xLTMuMS04LjIgMC0xMS4zIDEuNS0xLjUgMy41LTIuMyA1LjctMi4zczQuMiAwLjggNS43IDIuM2wwLjkgMC45IDAuOS0wLjljMS41LTEuNSAzLjUtMi4zIDUuNy0yLjNzNC4yIDAuOCA1LjcgMi4zYzMuMSAzLjEgMy4xIDguMiAwIDExLjNsLTguMiA4LjFjLTAuOCAwLjgtMS45IDEuMy0zLjEgMS4zeiIgZmlsbD0iI0ZGRDcwMCIgc3Ryb2tlPSJub25lIi8+Cjwvc3ZnPg==',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ca">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload custom font to prevent FOUT */}
        <link
          rel="preload"
          href="/assets/fonts/le-petit-cochon.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&family=Kalam:wght@300;400;700&family=Caveat:wght@400;500;600;700&family=Amatic+SC:wght@400;700&family=Fredoka+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ 
        fontFamily: 'Poppins, sans-serif',
        lineHeight: 1.6,
        color: '#2C3E2C',
        backgroundColor: '#F5E6D3',
        overflowX: 'hidden',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
      }}>
        {children}
      </body>
    </html>
  );
} 
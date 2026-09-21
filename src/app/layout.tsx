import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "For Meitcy",
  description: "I made something for you.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <style>{`
          :root {
            --font-pixel: 'Press Start 2P', monospace;
            --font-body: 'Inter', system-ui, sans-serif;
          }
        `}</style>
      </head>
      <body className="min-h-screen bg-offwhite antialiased selection:bg-lavender selection:text-navy">
        {children}
      </body>
    </html>
  );
}

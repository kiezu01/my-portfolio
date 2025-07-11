import React, { useEffect, useState } from "react";
import { LanguageProvider } from "../contexts/LanguageContext";
import type { ReactNode } from "react";
import "../app/globals.css";

export const metadata = {
  title: "Vu Trung Kien | Data Analyst Portfolio",
  description: "Portfolio of Vu Trung Kien - Data Analyst | Reporting Specialist",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600); // Giả lập loading, có thể chỉnh thời gian
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {loading && (
          <div style={{
            position: 'fixed', zIndex: 9999, top: 0, left: 0, width: '100vw', height: '100vh',
            background: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'opacity 0.3s',
          }}>
            <div style={{
              border: '6px solid #e6e6e6', borderTop: '6px solid #3b82f6', borderRadius: '50%', width: 48, height: 48,
              animation: 'spin 1s linear infinite'
            }} />
            <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
          </div>
        )}
        <LanguageProvider>
        {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
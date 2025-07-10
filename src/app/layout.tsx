import React from "react";
import { LanguageProvider } from "../contexts/LanguageContext";
import type { ReactNode } from "react";
import "../app/globals.css";

export const metadata = {
  title: "Vu Trung Kien | Data Analyst Portfolio",
  description: "Portfolio of Vu Trung Kien - Data Analyst | Reporting Specialist",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
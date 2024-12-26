// import { useState } from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "User App",
  description: "User role pages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [] = useState();
  return (
    <html lang="en">
      <body>
        <header>User Header</header>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shell App",
  description: "Layouts, authentication, route guards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>Shell Header</header>
        {children}
      </body>
    </html>
  );
}

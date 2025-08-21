import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hello World - Simple Page",
  description: "A simple and elegant Hello World page built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {children}
      </body>
    </html>
  );
}
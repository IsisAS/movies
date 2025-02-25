"use client";
import "./globals.css";
import Header from "@/components/header/header";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="mx-32 pt-[80px]">
          {children}
        </div>
      </body>
    </html>
  );
}

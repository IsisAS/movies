"use client";
import "./globals.css";
import Header from "@/components/header";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, []);

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

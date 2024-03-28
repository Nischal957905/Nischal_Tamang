//import '@styles/globals.css'
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tamang Nischal",
  description: "Professional Software Engineer and Ui/Ux Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

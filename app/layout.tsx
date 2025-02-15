import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "Policy Debunker",
  description: "The policy making dashboard for you.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}

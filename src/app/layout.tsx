import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TonWallet from '@/components/TonWallet';
import Header from '@/components/Header'
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "4ARTS",
  description: "4ARTS champions the entertainment sector through the integration of 'DeFi' and 'RWA,",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' container'}>
        <TonWallet>
          <Header />
          {children}
        </TonWallet>
      </body>
    </html>
  );
}

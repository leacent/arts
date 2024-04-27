"use client";

import { TonConnectUIProvider } from "@tonconnect/ui-react";
import Header from "@/components/Header";

export default function TonWallet({ children }: { children: React.ReactNode }) {
  return (
    <TonConnectUIProvider
      manifestUrl={`${process.env.NEXT_PUBLIC_DOMAIN}/tonconnect-manifest.json`}
    >
      {children}
    </TonConnectUIProvider>
  );
}

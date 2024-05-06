"use client";

import { TonConnectUIProvider } from "@tonconnect/ui-react";

export default function TonWallet({ children }: { children: React.ReactNode }) {
  return (
    <TonConnectUIProvider manifestUrl="https://arts-wine.vercel.app/tonconnect-manifest.json">
      {children}
    </TonConnectUIProvider>
  );
}

"use client"

import { TonConnectUIProvider } from '@tonconnect/ui-react';

export default function TonWallet({ children }: { children: React.ReactNode }) {
  return (
    <TonConnectUIProvider manifestUrl="http://192.168.1.12:3000/tonconnect-manifest.json">
      { children }
    </TonConnectUIProvider>
  );
}

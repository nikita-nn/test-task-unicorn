import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { config } from "../../wagmi.config.ts";
import React from "react";

const queryClient = new QueryClient();

export const WagmiProviderContext = ({ children }: React.PropsWithChildren) => (
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </WagmiProvider>
);

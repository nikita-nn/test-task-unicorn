import React from "react";
import { UserProvider } from "./UserProvider.tsx";
import { UserTableProvider } from "./UsersTableProvider.tsx";
import { WagmiProviderContext } from "./WagmiProviderContext.tsx";

/**
 * Все ContextProviders приложения.
 */

export const AppProviders = ({ children }: React.PropsWithChildren) => (
  <WagmiProviderContext>
    <UserProvider>
      <UserTableProvider>{children}</UserTableProvider>
    </UserProvider>
  </WagmiProviderContext>
);

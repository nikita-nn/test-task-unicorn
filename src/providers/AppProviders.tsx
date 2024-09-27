import React from "react";
import { UserProvider } from "./UserProvider.tsx";

// All application providers

export const AppProviders = ({ children }: React.PropsWithChildren) => (
  <UserProvider>{children}</UserProvider>
);

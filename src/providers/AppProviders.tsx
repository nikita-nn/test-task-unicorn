import React from "react";
import { UserProvider } from "./UserProvider.tsx";
import { UserTableProvider } from "./UsersTableProvider.tsx";

// All application providers

export const AppProviders = ({ children }: React.PropsWithChildren) => (
  <UserProvider>
    <UserTableProvider>{children}</UserTableProvider>
  </UserProvider>
);

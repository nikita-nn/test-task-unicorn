import React, { useEffect, useState } from "react";
import { IUserContext, User } from "../types/UserTypes.ts";

const UserContext = React.createContext<IUserContext | null>(null);

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const [user] = useState<User | null>(null);

  useEffect(() => {}, []);

  const editUser = () => {};
  const reloadUser = () => {};

  return (
    <UserContext.Provider value={{ user, reloadUser, editUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = React.useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within the context");
  }

  return context;
};

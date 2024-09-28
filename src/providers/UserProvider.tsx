import React, { useState } from "react";
import { IUserContext, User } from "../types/UserTypes.ts";

const UserContext = React.createContext<IUserContext | null>(null);

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  const reloadUser = () => {};

  const editUser = (whatToChange: keyof User, value: string | boolean) => {
    setUser((prevUser) => {
      if (prevUser) {
        return { ...prevUser, [whatToChange]: value };
      }
      return null;
    });
  };

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

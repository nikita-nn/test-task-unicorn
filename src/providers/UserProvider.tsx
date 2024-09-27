import React, { useContext, useEffect, useState } from "react";

const UserContext = React.createContext<UserProviderValues | null>(null);

interface User {
  address: string;
  name: string;
  email: string;
}

interface UserProviderValues {
  user: User | null;
  reload: () => void;
  changeData: (name: string) => void;
}

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    setTrigger(true);
  }, [trigger]);

  const reload = () => {
    setTrigger(!trigger);
  };

  const changeData = (name: string) => {
    setTimeout(() => {
      setUser((previousUser) => {
        if (previousUser) {
          return { ...previousUser, name: name };
        }
        return previousUser;
      });
    }, 1000);
  };

  return (
    <UserContext.Provider value={{ user, reload, changeData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};

import React, { useEffect, useState } from "react";
import { IUserContext, User } from "../types/UserTypes.ts";
import { useAccount } from "wagmi";

/**
 * Контекст данных пользователя, управление и обновление их.
 */
const UserContext = React.createContext<IUserContext | null>(null);

/**
 * Провайдер контекста пользователя. Оборачивает компоненты, предоставляя
 * доступ к данным пользователя и функциям их обновления.
 * @param children - дочерние компоненты, которые могут использовать контекст.
 */

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [trigger, setTrigger] = useState<boolean>(false);
  const { address } = useAccount();

  /**
   * Функция для перезагрузки данных пользователя, изменяя триггерный
   * статус. Это приведет к повторной инициализации данных в useEffect.
   */

  useEffect(() => {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const listed = localStorage.getItem("listed");

    if (!address) {
      localStorage.clear();
      return;
    } else {
      editUser("wallet", String(address));
    }

    if (name && name !== "null") {
      editUser("name", name);
    }

    if (email && email !== "null") {
      editUser("email", email);
    }

    if (listed && listed !== "null") {
      editUser("listed", listed === "true");
    }
  }, [address, trigger]);

  /**
   * Функция для обновления данных пользователя.
   */

  const reloadUser = () => setTrigger(!trigger);

  /**
   * Функция для редактирования данных пользователя.
   * @param whatToChange - все ключи User, то что меняем.
   * @param value - на что меняем.
   */

  const editUser = (whatToChange: keyof User, value: string | boolean) => {
    setUser((prevUser) => {
      return { ...prevUser, [whatToChange]: value };
    });
    localStorage.setItem(whatToChange, String(value));
  };

  return (
    <UserContext.Provider value={{ user, reloadUser, editUser }}>
      {children}
    </UserContext.Provider>
  );
};

/**
 * Хук для извлечения и обновления данных о пользователе
 */

export const useUser = () => {
  const context = React.useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within the context");
  }

  return context;
};

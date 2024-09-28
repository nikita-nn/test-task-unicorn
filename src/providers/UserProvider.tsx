import React, { useState } from "react";
import { IUserContext, User } from "../types/UserTypes.ts";

/**
 * Контекст данных пользователя, управление и обновление их.
 */

const UserContext = React.createContext<IUserContext | null>(null);

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  /**
   * Функция для обновления данных пользователя.
   * Not Implemented.
   */

  const reloadUser = () => {};

  /**
   * Функция для редактирования данных пользователя.
   * @param whatToChange - все ключи User, то что меняем.
   * @param value - на что меняем.
   */

  const editUser = (whatToChange: keyof User, value: string | boolean) => {
    setUser((prevUser) => {
      return { ...prevUser, [whatToChange]: value };
    });
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

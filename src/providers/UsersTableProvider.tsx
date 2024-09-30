import React, { useState } from "react";
import { ApiUrl } from "../../settings.ts";
import {
  TableResponseContext,
  UsersTableResponse,
} from "../types/UsersTableTypes.ts";
import { useUser } from "./UserProvider.tsx";

/**
 * Контекст данных пользователей в таблице, задел на будущее.
 */

const UserTableContext = React.createContext<TableResponseContext | null>(null);

export const UserTableProvider = ({ children }: React.PropsWithChildren) => {
  const [items, setItems] = useState<UsersTableResponse | null>(null);
  const { editUser } = useUser();

  /**
   * Функция для запроса данных с сервера для таблицы.
   * @param page - параметр указывающий на номер страницы с которой запрашиваются данные.
   * @param elemsInPage - параметр указывающий на число элементов на странице.
   */

  const fetchPage = async (page: number, elemsInPage: number) => {
    const response = await fetch(
      ApiUrl + "data" + "?page=" + page + "&perPage=" + elemsInPage,
    );
    if (!response.ok) {
      setItems(null);
      return;
    }
    const json = (await response.json()) as UsersTableResponse;
    setItems(json);
  };

  /**
   * Функция для показа пользователя в таблице бета теста.
   * @param list - показать или убрать пользователя из таблицы
   */

  const listUserInTable = (list: boolean) => {
    localStorage.setItem("listed", list.toString());
    editUser("listed", list);
  };

  return (
    <UserTableContext.Provider value={{ items, fetchPage, listUserInTable }}>
      {children}
    </UserTableContext.Provider>
  );
};

/**
 * Хук для извлечения и получения данных о пользователях в таблице
 */

export const useTableData = () => {
  const context = React.useContext(UserTableContext);

  if (!context) {
    throw new Error("useTableData must be used within the context");
  }

  return context;
};

import React, { useState } from "react";
import { ApiUrl } from "../../settings.ts";
import {
  TableReponseContext,
  UsersTableResponse,
} from "../types/UsersTableTypes.ts";

const UserTableContext = React.createContext<TableReponseContext | null>(null);

export const UserTableProvider = ({ children }: React.PropsWithChildren) => {
  const [items, setItems] = useState<UsersTableResponse | null>(null);

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

  return (
    <UserTableContext.Provider value={{ items, fetchPage }}>
      {children}
    </UserTableContext.Provider>
  );
};

export const useTableData = () => {
  const context = React.useContext(UserTableContext);

  if (!context) {
    throw new Error("useTableData must be used within the context");
  }

  return context;
};

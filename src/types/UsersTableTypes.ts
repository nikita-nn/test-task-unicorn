export interface UsersTableResponse {
  meta: ResponseMeta;
  items: TableResponseUser[];
}

interface ResponseMeta {
  currentPage: number;
  perPage: number;
  totalPages: number;
}

interface TableResponseUser {
  id: number;
  username: string;
  email: string;
  address: string;
}

export interface TableReponseContext {
  items: UsersTableResponse | null;
  fetchPage: (page: number, elemsInPage: number) => Promise<void>;
}

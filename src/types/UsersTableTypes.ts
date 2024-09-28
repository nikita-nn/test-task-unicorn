
/**
 * Типы для таблицы с пользователями (Beta Test Section).
 */

/**
 * Ответ от API ручки /data/ (актуально на 29.07.24).
 * @interface
 */

export interface UsersTableResponse {
  /**
   * Метадата ответа
   */
  meta: ResponseMeta;
  items: TableResponseUser[];
}

/**
 * Метадата ответа от API ручки /data/
 * @interface
 */

interface ResponseMeta {
  currentPage: number;
  perPage: number;
  totalPages: number;
}

/**
 * Структура данных пользователя от API ручки /data/
 * @interface
 */

interface TableResponseUser {
  id: number;
  username: string;
  email: string;
  address: string;
}

/**
 * Структура данных контекста таблицы.
 * @interface
 */

export interface TableReponseContext {
  items: UsersTableResponse | null;
  fetchPage: (page: number, elemsInPage: number) => Promise<void>;
}

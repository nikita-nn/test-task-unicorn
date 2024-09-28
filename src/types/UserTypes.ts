/**
 * Типы для пользователя и работы с ним.
 */


/**
 * Структура данных пользователя
 * @interface
 */
export interface User {
  /**
   * Адрес кошелька пользователя
   */
  wallet?: string;
  email?: string;
  name?: string;
  /**
   * Добавлен ли пользователь в таблицу
   */
  listed?: boolean;
}

/**
 * Структура данных в контексте пользователя
 * @interface
 */
export interface IUserContext {
  user: User | null;
  reloadUser: () => void;
  editUser: (whatToChange: keyof User, value: string | boolean) => void;
}

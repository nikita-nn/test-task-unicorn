export interface User {
  wallet: string;
  email?: string;
  name?: string;
  listed?: boolean;
}

export interface IUserContext {
  user: User | null;
  reloadUser: () => void;
  editUser: (whatToChange: keyof User, value: string | boolean) => void;
  clearUser: () => void;
}

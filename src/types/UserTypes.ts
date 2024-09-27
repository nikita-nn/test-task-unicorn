export interface User {
    wallet: string;
    email: string;
    name: string
}

export interface IUserContext {
    user: User | null;
    reloadUser: () => void;
    editUser: () => void;
}
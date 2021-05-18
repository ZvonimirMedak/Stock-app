export interface LoginInterface {
    email: string;
    password: string;
}

export interface User extends LoginInterface {
    uid: string;
}

export interface Stock {
    value: number;
    id: number;
}

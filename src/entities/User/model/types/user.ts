export interface User {
    id: string;
    username: string;
}

export interface UserSchema {
    authData?: User;
}

export enum Currency {
    'RUB' = 'RUB',
    'EUR' = 'EUR',
    'USD' = 'USD',
}
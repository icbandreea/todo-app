export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

export interface IUserCredentials {
    email: string;
    password: string;
}
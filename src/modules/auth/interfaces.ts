import { IUser } from '@app/repository/interfaces';

export interface LoginOrRegisterResponse {
    created: boolean;
    token: string;
    user: IUser;
}

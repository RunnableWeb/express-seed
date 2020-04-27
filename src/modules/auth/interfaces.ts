import { IUser } from '@app/repository/models';

export interface LoginOrRegisterResponse {
    created: boolean;
    token: string;
    user: IUser;
}

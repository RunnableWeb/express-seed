import { BaseRepo } from './BaseRepo';
import { User } from '@app/repository/entities';
import { IUserModel, IUser } from '@app/repository/interfaces';

class UsersRepo extends BaseRepo<IUserModel, IUser> {
    constructor() {
        super(User);
    }
}

export const usersRepo = new UsersRepo();

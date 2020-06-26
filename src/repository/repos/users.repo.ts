import { BaseRepo } from './BaseRepo';
import { IUserModel, IUser, User } from '@app/repository/models';

class UsersRepo extends BaseRepo<IUserModel, IUser> {
    constructor() {
        super(User);
    }
}

export const usersRepo = new UsersRepo();

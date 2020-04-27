import { BaseRepo } from './BaseRepo';
import { IUser, User } from './models';

export class UsersRepo extends BaseRepo<IUser> {
    constructor() {
        super(User);
    }
}

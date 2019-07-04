import { BaseRepo } from '../../repository';
import { IUser, User } from './models';
import moment = require('moment');

export class UsersRepo extends BaseRepo<IUser> {
    constructor() {
        super(User);
    }
}

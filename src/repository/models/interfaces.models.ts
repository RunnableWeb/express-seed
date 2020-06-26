import mongoose from 'mongoose';

import { BaseModel } from './definitions';

export interface IUser extends BaseModel {
    username: string;
    password: string;
}
export interface IUserModel extends IUser, mongoose.Document {}

import mongoose from 'mongoose';
export interface IWrite<T extends mongoose.Document, TBase> {
    create: (item: TBase) => Promise<T>;
    update(id: string, item: T): Promise<T | null>;
    delete(id: string): Promise<boolean>;
}

export interface IRead<T extends mongoose.Document> {
    find(cond: object): Promise<T[]>;
    findOne(cond: object): Promise<T>;
    findById(id: string): Promise<T>;
}

export interface BaseModel {
    id?: any; // per mongoose.Document type
    _id: any;
}

export interface IUser extends BaseModel {
    username: string;
    password: string;
}
export interface IUserModel extends IUser, mongoose.Document {}

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

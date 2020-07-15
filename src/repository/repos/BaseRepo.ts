import { IWrite, IRead } from '@app/repository/interfaces';
import mongoose, { Document } from 'mongoose';
type ObjectId = mongoose.Types.ObjectId;

// that class only can be extended
export abstract class BaseRepo<T extends mongoose.Document, TBase> implements IWrite<T, TBase>, IRead<T> {
    private _model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    async create(docs: TBase | TBase[]): Promise<T> {
        const rec = await this._model.create(docs);
        return rec as T;
    }
    async upsert(filter: object, model: TBase): Promise<T> {
        const rec = (await this._model.findOneAndUpdate(filter, model, {
            new: true,
            upsert: true, // Make this update into an upsert
        })) as T;

        return rec;
    }
    async update(id: string | ObjectId, model: Partial<T>): Promise<T | null> {
        const rec = (await this._model.findOneAndUpdate({ _id: this.toObjectId(id) }, model, {
            new: true,
        })) as T;

        return rec;
    }

    async updateMany({ filter, update }: { filter: object; update: Partial<T> }) {
        // this will NOT return modfied docuemnts and its a known limitation from mongo and mongoose
        return await this._model.updateMany(filter, update);
    }

    async delete(id: string | ObjectId): Promise<boolean> {
        id = typeof id === 'string' ? this.toObjectId(id) : id;
        await this._model.findOneAndDelete({ _id: id });
        return true;
    }

    async deleteMany(cond: object) {
        await this._model.deleteMany(cond);
    }

    async findByIdAndDelete({ id }: { id: string | ObjectId }): Promise<T> {
        return (await this._model.findByIdAndDelete(id)) as T;
    }

    async save(item: Document): Promise<T> {
        return (await item.save()) as T;
    }

    async find(cond: object, sortDesc: object | string | undefined = undefined): Promise<T[]> {
        const query = this._model.find(cond);
        if (sortDesc) {
            query.sort(sortDesc);
        }

        const recs = (await query.exec()) as T[];
        return recs;
    }
    async findById(id: string | ObjectId): Promise<T> {
        const rec = (await this._model.findById(id).exec()) as T;
        return rec;
    }

    async findOne(cond: object): Promise<T> {
        const rec = (await this._model.findOne(cond).exec()) as T;
        return rec;
    }

    async findOneAndDelete(cond: object): Promise<T> {
        return (await this._model.findOneAndDelete(cond)) as T;
    }

    async count(cond: object): Promise<number> {
        const rec = await this._model.count(cond).exec();
        return rec;
    }

    async exists(cond: object) {
        return (await this.count(cond)) > 0;
    }

    protected toObjectId(_id: string | ObjectId): mongoose.Types.ObjectId {
        if (_id instanceof mongoose.Types.ObjectId) {
            return _id as ObjectId;
        }

        return mongoose.Types.ObjectId.createFromHexString(_id as string);
    }
}

import mongoose, { Schema } from 'mongoose';

import { IUserModel } from '@app/repository/interfaces';

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model<IUserModel>('User', UserSchema, 'users');

export { User };

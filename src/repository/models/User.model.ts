import mongoose, { Schema, mongo } from 'mongoose';

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

interface IUser extends mongoose.Document {
    username: string;
    password: string;
}

const User = mongoose.model<IUser>('User', UserSchema, 'users');

export { User, IUser };

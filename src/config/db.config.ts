import mongoose from 'mongoose';

export default async () => {
    const dbHost = process.env.DB_HOST || 'localhost';
    const dbPort = process.env.DB_PORT || 27017;
    const dbName = process.env.DB_NAME || 'rw-express-seed';
    const dbUser = process.env.DB_USER || undefined;
    const dbPass = process.env.DB_PASS || undefined;

    try {
        mongoose.set('useCreateIndex', true);
        const userNameAndPassword = dbUser ? `${dbUser}:${dbPass}@` : '';
        await mongoose.connect(`mongodb://${userNameAndPassword}@${dbHost}:${dbPort}/${dbName}`, {
            useNewUrlParser: true,
        });
        console.log(`console.log('Connected Successfully to DB')`);
    } catch (err) {
        console.error(`ERROR CONNECTING TO DB: ${err}`);
    }
};

import { IUserModel } from '@app/repository/interfaces';

/**
 * need to extend the two files
 */

declare module 'express' {
    interface Request {
        currentUser: IUserModel;
    }
}

declare module 'express-serve-static-core' {
    interface Request {
        currentUser: IUserModel;
    }
}

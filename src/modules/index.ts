import { Router } from 'express-serve-static-core';

import { router as authRouter } from './auth';
import { router as usersRouter } from './users';
// #region routers map
enum EModuleName {
    Auth = 'auth',
    Users = 'users',
}

const routesMap = new Map<string, Router>([
    [EModuleName.Auth, authRouter],
    [EModuleName.Users, usersRouter],
]);
// #endregion routers map

export { routesMap, EModuleName };

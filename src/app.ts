import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import { applyMiddleware, applyRoutes } from '@app/utils';

import { routesMap } from '@app/modules';
import { mwCommons, mwErrors } from '@app/middlewares';
import { config } from '@app/config';
import { init as repoInit } from '@app/repository';

const app = express();

config();

repoInit();

applyMiddleware(mwCommons, app);

// TOBE DELTEDED, just for debugging
//custom Middleware for logging the each request going to the API
app.use((req, res, next) => {
    if (req.body) console.info(req.body);
    if (req.params) console.info(req.params);
    if (req.query) console.info(req.query);
    console.info(`Received a ${req.method} request from ${req.ip} for ${req.url}`);
    next();
});

applyRoutes(routesMap, app);

applyMiddleware(mwErrors, app);

export default app;

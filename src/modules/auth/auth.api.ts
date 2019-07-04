import express from 'express';
import httpStatus from 'http-status';

import { AuthService } from './auth.service';

const router = express.Router();

router.post('/test/loginOrRegister', async (req, res) => {
    const { username, password } = req.body;

    const loginOrRegRes = await AuthService.loginOrRegister(username, password);

    let statusCode = loginOrRegRes.created ? httpStatus.CREATED : httpStatus.OK;
    res.status(statusCode).send(loginOrRegRes);
});

router.post('/login', (req, res) => {
    // to implement
});

router.post('/register', (req, res) => {
    // to implement
});

export { router };

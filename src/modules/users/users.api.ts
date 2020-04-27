import express from 'express';
import httpStatus from 'http-status';

const router = express.Router();

router.get('/', async (req, res) => {
    return res.status(httpStatus.OK).send('!! reached authrozied endpoint !!');
});

export { router };

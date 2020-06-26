import dotenv from 'dotenv';
import { PassportStatic } from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

import { usersRepo } from '@app/repository/repos';

dotenv.config();
const secret = process.env.JWT_SECERT || 'some other secret as default';

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret,
};

export default (passport: PassportStatic) => {
    passport.use(
        new Strategy(opts, async (payload, done) => {
            const user = await usersRepo.findById(payload.id);
            if (user) {
                return done(null, {
                    id: user.id,
                    username: user.username,
                });
            }

            return done(null, false);
        }),
    );
};

import passport from "passport";
import { Strategy } from "passport-local";
import { User } from "../modules/users/users.schema";
import { comparePassword } from "../utils/helpers";

passport.serializeUser((user: any, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id: string, done) => {
    try {
        const user = await User.findById(id);

        if (!user) throw new Error('User not found');

        done(null, user);
    } catch (err) {
        done(err, {});
    }
});

export default passport.use(
    new Strategy({ usernameField: 'email' }, async (email, password, done) => {
        try {
            const user: any = await User.findOne({ email });

            if (!user) throw new Error('User not found');
            if (!comparePassword(user.password, password)) throw new Error('Bad credentials');

            done(null, user);
        } catch (err) {
            done(err, {});
        }
    })
);
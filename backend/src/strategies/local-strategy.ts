import passport from "passport";
import { Strategy } from "passport-local";

passport.serializeUser((user: any, done) => {
    done(null, user.id);
});

passport.deserializeUser((id: string, done) => {
    // find user
    done(null, {id: 1, email: "asdasasd", password: "asdasdad"});
});

export default passport.use(new Strategy({ usernameField: 'email' }, (email, password, done) => {
    console.log('Email: ' + email);
    console.log('Password: ' + password);

    // find user
    done(null, { id: 1, email: email, password: password });
}));
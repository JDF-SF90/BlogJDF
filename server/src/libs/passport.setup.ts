import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import keys from '../config/keys';

passport.use(new GoogleStrategy.Strategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
  }, () => { })
);
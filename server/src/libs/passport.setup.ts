import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import keys from '../config/keys';
import TripulantesDao from '../dao/tripulantesDao';
import { Tripulante } from '../models/tripulante';

// used to serialize the user for the session
passport.serializeUser((id: string, done) => {
  done(null, id); 
});

passport.deserializeUser((id: string, done) => {
  TripulantesDao.findbyProviderId(id).then(t => {
    done(null, t);
  })
});


passport.use(new GoogleStrategy.Strategy({
    
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/api/auth/google/redirect'
  }, (accessToken, refreshToken, profile, done) => { 
    
    TripulantesDao.findbyProviderId(profile.id).then(t => {
      if(!t){
        TripulantesDao.create(profile.id, profile.displayName,'', profile._json.picture);
        let tripulante: Tripulante = {
          provider_id: profile.id,
          name: profile.displayName,
          picture: profile._json.picture
        }
        done('null', tripulante.provider_id);
      }
      else{
        done('null', t.provider_id);
      }
    });
    
  })
);
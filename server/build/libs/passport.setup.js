"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
const keys_1 = __importDefault(require("../config/keys"));
const tripulantesDao_1 = __importDefault(require("../dao/tripulantesDao"));
// used to serialize the user for the session
passport_1.default.serializeUser((id, done) => {
    done(null, id);
});
passport_1.default.deserializeUser((id, done) => {
    tripulantesDao_1.default.findbyProviderId(id).then(t => {
        done(null, t);
    });
});
passport_1.default.use(new passport_google_oauth20_1.default.Strategy({
    clientID: keys_1.default.google.clientID,
    clientSecret: keys_1.default.google.clientSecret,
    callbackURL: '/api/auth/google/redirect'
}, (accessToken, refreshToken, profile, done) => {
    tripulantesDao_1.default.findbyProviderId(profile.id).then(t => {
        if (!t) {
            tripulantesDao_1.default.create(profile.id, profile.displayName, '', profile._json.picture);
            let tripulante = {
                provider_id: profile.id,
                name: profile.displayName,
                picture: profile._json.picture
            };
            done('null', tripulante.provider_id);
        }
        else {
            done('null', t.provider_id);
        }
    });
}));

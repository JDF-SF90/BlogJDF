"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = __importDefault(require("passport-google-oauth20"));
const keys_1 = __importDefault(require("../config/keys"));
passport_1.default.use(new passport_google_oauth20_1.default.Strategy({
    clientID: keys_1.default.google.clientID,
    clientSecret: keys_1.default.google.clientSecret
}, () => { }));

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = __importDefault(require("../controllers/authController"));
class AuthRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        /*
        this.router.get('/login', authController.login);
<<<<<<< HEAD
        this.router.get('/logout', authController.logOut);
        this.router.get('/google', passport.authenticate('google', {
             scope: ['profile']
        }), authController.google);
        this.router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
            res.send(req.user);
        });
=======
        this.router.get('/logout', authController.login);
        this.router.get('/google', authController.google);
        */
        this.router.post('/register', authController_1.default.createUser);
        this.router.post('/login', authController_1.default.loginUser);
    }
}
const authRoutes = new AuthRoutes();
exports.default = authRoutes.router;

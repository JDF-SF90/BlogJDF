"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = __importDefault(require("../controllers/authController"));
const passport_1 = __importDefault(require("passport"));
class AuthRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/login', authController_1.default.login);
        this.router.get('/logout', authController_1.default.logOut);
        this.router.get('/google', passport_1.default.authenticate('google', {
            scope: ['profile']
        }), authController_1.default.google);
        this.router.get('/google/redirect', passport_1.default.authenticate('google'), (req, res) => {
            res.send(req.user);
        });
    }
}
const authRoutes = new AuthRoutes();
exports.default = authRoutes.router;

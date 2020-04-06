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
        this.router.get('/login', authController_1.default.login);
        this.router.get('/logout', authController_1.default.login);
        this.router.get('/google', authController_1.default.google);
    }
}
const authRoutes = new AuthRoutes();
exports.default = authRoutes.router;

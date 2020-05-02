"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const keys_1 = __importDefault(require("../config/keys"));
exports.verifyToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send('Request sin autorización');
    }
    const token = req.headers.authorization.split(' ', 2)[1];
    if (!token) {
        return res.status(401).send('Request sin autorización');
    }
    const payload = jsonwebtoken_1.default.verify(token, keys_1.default.secretkey.secretkey);
    req.user = payload;
    next();
};

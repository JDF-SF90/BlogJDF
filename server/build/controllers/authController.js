"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const keys_1 = __importDefault(require("../config/keys"));
const authDao_1 = __importDefault(require("../dao/authDao"));
class AuthController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = {
                name: req.body.name,
                email: req.body.email,
                password: bcryptjs_1.default.hashSync(req.body.password)
            };
            authDao_1.default.create(newUser).then((user) => {
                console.log(user);
                if (user == 1) {
                    res.status(409).send({ message: 'email already exists' });
                }
                else {
                    const expiresIn = 24 * 60 * 60;
                    const accessToken = jsonwebtoken_1.default.sign({ id: user[0].tripulante_id }, keys_1.default.secretkey.secretkey, { expiresIn: expiresIn });
                    const dataUser = {
                        name: user[0].name,
                        email: user[0].mail,
                        accessToken: accessToken,
                        expiresIn: expiresIn,
                        ual: user[0].user_access_level
                    };
                    res.send({ dataUser });
                }
            }).catch((error) => {
                res.status(500).send('server error');
            });
        });
    }
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = {
                email: req.body.email,
                password: req.body.password,
            };
            authDao_1.default.findOne(userData).then((user) => {
                if (user == 0) {
                    res.status(409).send({ message: 'something is wrong' });
                }
                else {
                    if (!bcryptjs_1.default.compareSync(userData.password, user[0].password)) {
                        res.status(409).send({ message: 'something is wrong' });
                    }
                    else {
                        const expiresIn = 24 * 60 * 60;
                        const accessToken = jsonwebtoken_1.default.sign({ id: user[0].tripulante_id }, keys_1.default.secretkey.secretkey, { expiresIn: expiresIn });
                        const dataUser = {
                            name: user[0].name,
                            email: user[0].mail,
                            accessToken: accessToken,
                            expiresIn: expiresIn,
                            ual: user[0].user_access_level
                        };
                        res.send({ dataUser });
                    }
                }
            }).catch((error) => {
                res.status(500).send('server error');
            });
        });
    }
    google(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json('google');
        });
    }
    redirect(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send(req.user);
        });
    }
}
const authController = new AuthController();
exports.default = authController;

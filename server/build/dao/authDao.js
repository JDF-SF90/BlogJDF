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
const database_1 = __importDefault(require("../database"));
class AuthDao {
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var sql_statement = "CALL ng_blog_db.GET_TRIPULANTE_BY_EMAIL('" + user.email + "')";
                console.log(sql_statement);
                const findUser = yield database_1.default.query(sql_statement, []);
                if (findUser[0].length > 0) {
                    return 1;
                }
                else {
                    sql_statement = "CALL ng_blog_db.INSERT_TRIPULANTE_BYMAIL('" + user.name + "','" + user.email + "','" + user.password + "')";
                    console.log(sql_statement);
                    const userRes = yield database_1.default.query(sql_statement);
                    return userRes[0];
                }
            }
            catch (error) {
                return error;
            }
        });
    }
    findOne(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var sql_statement = "CALL ng_blog_db.GET_TRIPULANTE_BY_EMAIL('" + user.email + "')";
                console.log(sql_statement);
                const userRes = yield database_1.default.query(sql_statement);
                if (!userRes[0]) {
                    return 0;
                }
                return userRes[0];
            }
            catch (error) {
                return error;
            }
        });
    }
}
const authDao = new AuthDao();
exports.default = authDao;

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
class CategoriesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = yield database_1.default.query('CALL ng_blog_db.GET_ALL_CATEGORIES()');
            res.json(categories);
        });
    }
    getOne(req, res) {
        res.json('One');
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('CALL ng_blog_db.INSERT_CATEGORIES(?,?)', req.params.name, req.params.description);
            res.json({ message: 'categorie saved' });
        });
    }
    delete(req, res) {
        res.json({ text: 'delete a game' });
    }
    update(req, res) {
        res.json({ text: 'update a game' });
    }
}
const categoriesController = new CategoriesController();
exports.default = categoriesController;

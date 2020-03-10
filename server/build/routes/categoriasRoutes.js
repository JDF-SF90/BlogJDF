"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriesController_1 = __importDefault(require("../controllers/categoriesController"));
class CategoriasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', categoriesController_1.default.list);
        this.router.get('/:id', categoriesController_1.default.getOne);
        this.router.post('/', categoriesController_1.default.create);
        this.router.delete('/:id', categoriesController_1.default.delete);
        this.router.put('/:id', categoriesController_1.default.update);
    }
}
const categoriasRoutes = new CategoriasRoutes();
exports.default = categoriasRoutes.router;

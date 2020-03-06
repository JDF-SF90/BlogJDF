"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class CategoriasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('categorias routes'));
    }
}
const categoriasRoutes = new CategoriasRoutes();
exports.default = categoriasRoutes.router;

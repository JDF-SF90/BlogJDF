"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CategoriesController {
    list(req, res) {
        res.json('list categories');
    }
    getOne(req, res) {
        res.json('One');
    }
    create(req, res) {
        res.json({ text: 'creating a game' });
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

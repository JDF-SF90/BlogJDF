"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("../libs/multer"));
const topicsController_1 = __importDefault(require("../controllers/topicsController"));
class TopicsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', topicsController_1.default.list);
        this.router.get('/:id', topicsController_1.default.getAllbyCategorieId);
        this.router.get('/topic/:id', topicsController_1.default.getOneTopic);
        this.router.post('/', multer_1.default.single('image'), topicsController_1.default.create);
        this.router.delete('/:id', topicsController_1.default.delete);
        this.router.put('/:id', topicsController_1.default.update);
    }
}
const topicsRoutes = new TopicsRoutes();
exports.default = topicsRoutes.router;

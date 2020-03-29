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
class TopicsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const topics = yield database_1.default.query('CALL ng_blog_db.GET_ALL_TOPICS()');
            res.json(topics);
        });
    }
    getAllbyCategorieId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            var sql_statement = "CALL ng_blog_db.GET_ALL_TOPICS_byCategorieId(" + id + ")";
            console.log(sql_statement);
            const topics = yield database_1.default.query(sql_statement);
            if (topics.length > 0) {
                return res.json(topics);
            }
            res.status(404).json({ text: 'TOPICs no encontrados' });
        });
    }
    getOneTopic(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            var sql_statement = "CALL ng_blog_db.GET_TOPIC_byId(" + id + ")";
            console.log(sql_statement);
            const topic = yield database_1.default.query(sql_statement);
            if (topic.length > 0) {
                return res.json(topic[0]);
            }
            res.status(404).json({ text: 'TOPIC no encontrada' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql_statement = "CALL ng_blog_db.INSERT_TOPIC('" + req.body['name'] + "','" + req.body['contenido'] + "','" + req.file.path.replace("\\", "\\\\") + "','" + req.body['categorie_id'] + "','" + req.body['tiempo'] + "','" + req.body['link'] + "','" + req.body['isActive'] + "')";
            console.log(sql_statement);
            yield database_1.default.query(sql_statement);
            res.json({ message: 'topic saved' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            var sql_statement = "CALL ng_blog_db.DELETE_TOPIC_byId(" + id + ")";
            console.log(sql_statement);
            yield database_1.default.query(sql_statement);
            res.json({ message: 'topic eliminada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            var sql_statement = "CALL ng_blog_db.UPDATE_TOPIC_byId('" + id + "','" + req.body['name'] + "','" + req.body['contenido'] + "','" + req.body['picture'] + "','" + req.body['categorie_id'] + "','" + req.body['tiempo'] + "','" + req.body['link'] + "','" + req.body['isactive'] + "')";
            console.log(sql_statement);
            yield database_1.default.query(sql_statement);
            res.json({ message: 'topic actualizada' });
        });
    }
}
const topicsController = new TopicsController();
exports.default = topicsController;

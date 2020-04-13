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
class TripulantesModel {
    findbyId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const tripulante = yield database_1.default.query("CALL ng_blog_db.GET_TRIPULANTE_BY_ID(" + id + ")");
            return tripulante;
        });
    }
    findbyProviderId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const tripulante = yield database_1.default.query("CALL ng_blog_db.GET_TRIPULANTE_BY_PROVIDERID(" + id + ")");
            console.log(tripulante[0]);
            return tripulante[0];
        });
    }
    create(providerid, name, mail, picture) {
        return __awaiter(this, void 0, void 0, function* () {
            const tripulante = yield database_1.default.query("CALL ng_blog_db.INSERT_TRIPULANTE_BYPROVIDER('" + name + "','" + picture + "','" + providerid + "','" + mail + "')");
        });
    }
    Update() {
    }
    delete() {
    }
}
const tripulantesModel = new TripulantesModel();
exports.default = tripulantesModel;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const categoriasRoutes_1 = __importDefault(require("./routes/categoriasRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    //configurar propiedad app
    config() {
        //si existe un puerto definido tomalo, sino toma el puerto 3000
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json()); //entiende envio y recepcion json
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //definir de app las rutas del servidor
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/categorias', categoriasRoutes_1.default);
    }
    //inicializar el servidor
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();

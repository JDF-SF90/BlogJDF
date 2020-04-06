import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';


import indexRoutes from './routes/indexRoutes';
import categoriasRoutes from './routes/categoriasRoutes';
import topicsRoutes from './routes/topicsRoutes';
import authRoutes from './routes/authRoutes';

class Server {
    
    public app: Application; 

    constructor(){
        this.app = express();
        this.config();
        this.routes();    
    }

    //configurar propiedad app
    config(): void {
        //si existe un puerto definido tomalo, sino toma el puerto 3000
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json()); //entiende envio y recepcion json
        this.app.use(express.urlencoded({extended:false}));
        this.app.use('/uploads', express.static(path.resolve('uploads')));

    }

    //definir de app las rutas del servidor
    routes(): void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/categorias',categoriasRoutes);
        this.app.use('/api/topics',topicsRoutes);
        this.app.use('/api/auth', authRoutes);
    }

    //inicializar el servidor
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();
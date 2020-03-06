import { Router } from 'express';

class CategoriasRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send('categorias routes'));
    }
    
}

const categoriasRoutes = new CategoriasRoutes();

export default categoriasRoutes.router;
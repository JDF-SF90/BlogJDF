import { Router } from 'express';
import '../libs/verifyToken';


import categoriesController from '../controllers/categoriesController';
import { verifyToken } from '../libs/verifyToken';

class CategoriasRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', categoriesController.list);
        this.router.get('/:id', categoriesController.getOne);
        this.router.post('/', categoriesController.create);
        this.router.delete('/:id', categoriesController.delete);
        this.router.put('/:id', categoriesController.update);
    }

}

const categoriasRoutes = new CategoriasRoutes();
export default categoriasRoutes.router;
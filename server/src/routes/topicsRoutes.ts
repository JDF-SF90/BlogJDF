import { Router } from 'express';


import topicsController from '../controllers/topicsController';

class TopicsRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', topicsController.list);
        this.router.get('/:id', topicsController.getAllbyCategorieId);
        this.router.get('/:id', topicsController.getOneTopic);
        this.router.post('/', topicsController.create);
        this.router.delete('/:id', topicsController.delete);
        this.router.put('/:id', topicsController.update);
    }

}

const topicsRoutes = new TopicsRoutes();
export default topicsRoutes.router;
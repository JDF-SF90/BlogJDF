import {Request, Response} from 'express';

import pool from '../database';


class CategoriesController {

    public list (req: Request,res: Response) {
         res.json('list categories');
    }

    public getOne (req: Request,res: Response) {
        res.json('One');
   }

    public create(req: Request,res: Response){
        res.json({text:'creating a game'});
    }

    public delete(req: Request,res: Response){
        res.json({text:'delete a game'});
    }

    public update(req: Request,res: Response){
        res.json({text:'update a game'});
    }
}

const categoriesController = new CategoriesController();
export default categoriesController;
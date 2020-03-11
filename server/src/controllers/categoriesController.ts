import {Request, Response} from 'express';

import pool from '../database';


class CategoriesController {

    public async list (req: Request,res: Response) {
        const categories = await pool.query('CALL ng_blog_db.GET_ALL_CATEGORIES()');
        res.json(categories);
    }

    public getOne (req: Request,res: Response) {
        res.json('One');
   }

    public async create(req: Request,res: Response): Promise<void>{
        
        await pool.query('CALL ng_blog_db.INSERT_CATEGORIES(?,?)', req.params.name, req.params.description);
        res.json({message:'categorie saved'});
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
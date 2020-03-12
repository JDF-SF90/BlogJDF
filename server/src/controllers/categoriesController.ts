import {Request, Response} from 'express';

import pool from '../database';


class CategoriesController {

    public async list (req: Request,res: Response) {
        const categories = await pool.query('CALL ng_blog_db.GET_ALL_CATEGORIES()');
        res.json(categories);
    }

    public async getOne (req: Request,res: Response): Promise<any>{
        const { id } = req.params;
        var sql_statement = "CALL ng_blog_db.GET_CATEGORIE_byId(" + id + ")";
        console.log(sql_statement);
        const categorie = await pool.query(sql_statement);
        if(categorie.length > 0){
            return res.json(categorie[0]);
        }
        res.status(404).json({text: 'categoria no encontrada'});
   }

    public async create(req: Request,res: Response): Promise<void>{
        
        var sql_statement = "CALL ng_blog_db.INSERT_CATEGORIES('" + req.body['name'] + "','" + req.body['description'] + "')";
        console.log(sql_statement);
        await pool.query(sql_statement);
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
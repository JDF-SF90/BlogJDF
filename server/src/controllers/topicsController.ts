import {Request, Response} from 'express';

import pool from '../database';


class TopicsController {

    public async list (req: Request,res: Response) {
        const topics = await pool.query('CALL ng_blog_db.GET_ALL_TOPICS()');
        res.json(topics);
    }

    public async getAllbyCategorieId (req: Request,res: Response): Promise<any>{
        const { id } = req.params;
        var sql_statement = "CALL ng_blog_db.GET_ALL_TOPICS_byCategorieId(" + id + ")";
        console.log(sql_statement);
        const topics = await pool.query(sql_statement);
        if(topics.length > 0){
            return res.json(topics);
        }
        res.status(404).json({text: 'TOPICs no encontrados'});
   }


    public async getOneTopic (req: Request,res: Response): Promise<any>{
        const { id } = req.params;
        var sql_statement = "CALL ng_blog_db.GET_TOPIC_byId(" + id + ")";
        console.log(sql_statement);
        const topic = await pool.query(sql_statement);
        if(topic.length > 0){
            return res.json(topic[0]);
        }
        res.status(404).json({text: 'TOPIC no encontrada'});
   }

    public async create(req: Request,res: Response): Promise<void>{
        
        var sql_statement = "CALL ng_blog_db.INSERT_TOPIC('" + req.body['name'] + "','" + req.body['contenido'] + "','" + req.body['picture'] + "','" + req.body['categorie_id'] + "','" + req.body['tiempo'] + "','" + req.body['link'] + "','" + req.body['isActive'] + "')";
        console.log(sql_statement);
        await pool.query(sql_statement);
        res.json({message:'topic saved'});
    }

    public async delete(req: Request,res: Response): Promise<void>{
        const { id } = req.params;
        var sql_statement = "CALL ng_blog_db.DELETE_TOPIC_byId(" + id + ")";
        console.log(sql_statement);
        await pool.query(sql_statement);
        res.json({message: 'topic eliminada'});
    }

    public async update(req: Request,res: Response): Promise<void>{
        const { id } = req.params;
        var sql_statement = "CALL ng_blog_db.UPDATE_TOPIC_byId('" + id + "','"  + req.body['name'] + "','" + req.body['contenido'] + "','" + req.body['picture'] + "','" + req.body['categorie_id'] + "','" + req.body['tiempo'] + "','" + req.body['link'] + "','" + req.body['isactive'] + "')";
        console.log(sql_statement);
        await pool.query(sql_statement);
        res.json({message:'topic actualizada'});
    }
}

const topicsController = new TopicsController();
export default topicsController;
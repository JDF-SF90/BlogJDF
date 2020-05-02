import pool from '../database';
import { Tripulante } from '../model/authModel';


class AuthDao {

    public async create(user: any): Promise<any> {
      try
      { 
         
         var sql_statement = "CALL ng_blog_db.GET_TRIPULANTE_BY_EMAIL('" + user.email + "')";
         console.log(sql_statement);
         const findUser: [Array<Tripulante>] = await pool.query(sql_statement,[]);
         
         if(findUser[0].length > 0){
            return 1
         }
         else {
            sql_statement = "CALL ng_blog_db.INSERT_TRIPULANTE_BYMAIL('" + user.name + "','" + user.email + "','" +  user.password + "')";
            console.log(sql_statement);
            const userRes = await pool.query(sql_statement);
               
            return userRes[0];
         }

      }
      catch(error)
      {
            return error;
      }
    }

    public async findOne(user: any): Promise<any> {
      try
      { 
         var sql_statement = "CALL ng_blog_db.GET_TRIPULANTE_BY_EMAIL('" + user.email + "')";
         console.log(sql_statement);
         const userRes = await pool.query(sql_statement);
         
         if(!userRes[0]){
            return 0;
         }

         return userRes[0];
      }
      catch(error)
      {
         return error;
      }
    }

}

const authDao = new AuthDao();
export default authDao;
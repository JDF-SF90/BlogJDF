import pool from '../database';
import { Tripulante } from '../models/tripulante';

class TripulantesDao {

    public tripulante: Tripulante | any;

    public async findbyId (id: string) {
        const tripulante = await pool.query("CALL ng_blog_db.GET_TRIPULANTE_BY_ID(" + id + ")");
        return tripulante;
    }

    public async findbyProviderId (id: string): Promise<Tripulante>{
        const result = await pool.query("CALL ng_blog_db.GET_TRIPULANTE_BY_PROVIDERID(" + id + ")");
        this.tripulante = result[0];
        return this.tripulante;
    }

    public async create (providerid: string, name: string, mail: string, picture: string ) {
        const tripulante = await pool.query("CALL ng_blog_db.INSERT_TRIPULANTE_BYPROVIDER('" + name + "','" + picture + "','" + providerid + "','" + mail + "')");
    }

    public Update () {
        
    }

    public delete () {
        
    }

}

const tripulantesDao = new TripulantesDao();
export default tripulantesDao;
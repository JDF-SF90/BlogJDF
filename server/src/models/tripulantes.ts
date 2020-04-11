import pool from '../database';


class TripulantesModel {

    public async findbyId (id: string) {
        const tripulante = await pool.query("CALL ng_blog_db.GET_TRIPULANTE_BY_ID(" + id + ")");
        return tripulante;
    }

    public create () {
        
    }

    public Update () {
        
    }

    public delete () {
        
    }

}

const tripulantesModel = new TripulantesModel();
export default tripulantesModel;
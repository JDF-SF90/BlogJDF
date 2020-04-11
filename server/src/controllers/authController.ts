import {Request, Response} from 'express';

import pool from '../database';


class AuthController {

    public async login (req: Request,res: Response) {
        res.json('login');
    }

    public async logOut (req: Request,res: Response) {
        res.json('logout');
    }

    public async google (req: Request,res: Response) {
        res.json('google');
    }

    public async redirect (req: Request,res: Response) {
        res.json('redirect');
    }

}

const authController = new AuthController();
export default authController;
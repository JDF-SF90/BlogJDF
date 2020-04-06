import {Request, Response} from 'express';

import pool from '../database';


class AuthController {

    public async login (req: Request,res: Response) {
        console.log('log in');
    }

    public async logOut (req: Request,res: Response) {
        console.log('log out');
    }

    public async google (req: Request,res: Response) {
        console.log('Google');
    }

}

const authController = new AuthController();
export default authController;
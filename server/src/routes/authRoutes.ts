import { Router } from 'express';
import authController from '../controllers/authController';

class AuthRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/login', authController.login);
        this.router.get('/logout', authController.login);
        this.router.get('/google', authController.google);
    }

}

const authRoutes = new AuthRoutes();
export default authRoutes.router;
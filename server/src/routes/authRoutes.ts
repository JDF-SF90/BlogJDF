import { Router } from 'express';
import authController from '../controllers/authController';
import passport from 'passport';

class AuthRoutes {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        /*
        this.router.get('/login', authController.login);
<<<<<<< HEAD
        this.router.get('/logout', authController.logOut);
        this.router.get('/google', passport.authenticate('google', {
             scope: ['profile']
        }), authController.google);
        this.router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
            res.send(req.user);
        });

        this.router.get('/logout', authController.login);
        this.router.get('/google', authController.google);
        */
       this.router.post('/register', authController.createUser);
       this.router.post('/login', authController.loginUser);

    }
}


const authRoutes = new AuthRoutes();
export default authRoutes.router;
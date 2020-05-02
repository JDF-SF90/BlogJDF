import {Request, Response} from 'express';
import jsonwebtoken from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import keys from '../config/keys';
import  authDao from '../dao/authDao';

class AuthController {

    public async createUser (req: Request,res: Response): Promise<any> {
        
        
        const newUser = {
            name: req.body.name,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password)
        }
      
        authDao.create(newUser).then((user: any) =>{

            console.log(user);

            if(user == 1){
                
                res.status(409).send({message: 'email already exists'});
            
            }
            else{

                const expiresIn = 24 * 60 * 60;
                const accessToken = jsonwebtoken.sign({id: user[0].tripulante_id}, keys.secretkey.secretkey, { expiresIn: expiresIn });
            
                const dataUser = {
                    name: user[0].name,
                    email: user[0].mail,
                    accessToken: accessToken,
                    expiresIn: expiresIn,
                    ual: user[0].user_access_level
                }
                res.send({dataUser});

<<<<<<< HEAD
    public async login (req: Request,res: Response) {
        res.json('login');
    }

    public async logOut (req: Request,res: Response) {
        res.json('logout');
=======
                
            }

        }).catch((error: any) =>{
            res.status(500).send('server error');
        });
        
    }

    
    public async loginUser (req: Request,res: Response) {
        const userData = {
            email: req.body.email,
            password: req.body.password,
        }

        authDao.findOne(userData).then((user: any) =>{
               
           if(user == 0)
           {
                res.status(409).send({message: 'something is wrong'});
           }
           else{
               if(!bcryptjs.compareSync(userData.password,user[0].password)){
                    res.status(409).send({message: 'something is wrong'});
               }
               else{
                const expiresIn = 24 * 60 * 60;
                const accessToken = jsonwebtoken.sign({id: user[0].tripulante_id}, keys.secretkey.secretkey, { expiresIn: expiresIn });

                const dataUser = {
                    name: user[0].name,
                    email: user[0].mail,
                    accessToken: accessToken,
                    expiresIn: expiresIn,
                    ual: user[0].user_access_level
                }
                res.send({dataUser});
               }
           }
        }).catch((error: any) =>{
            res.status(500).send('server error');
        }); 
>>>>>>> new_branch
    }


    public async google (req: Request,res: Response) {
        res.json('google');
    }

    public async redirect (req: Request,res: Response) {
        res.send(req.user);
    }

}

const authController = new AuthController();
export default authController;
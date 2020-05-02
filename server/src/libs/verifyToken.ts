import {Request, Response, NextFunction} from 'express';
import jsonwebtoken from 'jsonwebtoken';
import keys from '../config/keys';


export const verifyToken = (req: Request, res: Response, next: NextFunction){
    
    if(!req.headers.authorization)
    {
        return res.status(401).send('Request sin autorización');
    }    
    
    const token = req.headers.authorization.split(' ', 2)[1];

    if(!token)
    {
        return res.status(401).send('Request sin autorización');
    }

    const payload = jsonwebtoken.verify(token, keys.secretkey.secretkey);
    
    req.user = payload;
    next();

    };


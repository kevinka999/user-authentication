import { NextApiRequest, NextApiResponse } from "next";
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import cookie from 'cookie';

import { connectDb } from '../../database/connectDb';
import { UserLoginData } from '../../contexts/UserContext';

interface NextLoginRequest extends NextApiRequest{
    body: UserLoginData;
}

export default async function login(req: NextLoginRequest, res: NextApiResponse) {
    if (req.method === 'POST'){
        const db = await connectDb();
        
        const user = await db.get('SELECT * FROM user WHERE email = ?', [
            req.body.email 
        ]);
        
        compare(req.body.password, user.password, (error, result) => {
            if(!error && result){
                const jwt = sign({
                    userId: user.id
                }, process.env.JWT_SECRET, {expiresIn: '1h'});
                
                res.setHeader('Set-Cookie', cookie.serialize('authToken', jwt, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== 'development',
                    sameSite: 'strict',
                    maxAge: 3600,
                    path: '/'
                }))

                res.json({message: 'Welcome!'})
            }
            else {
                res.json({message: 'Something wrong. try again!'})
            }
        });   
    }
    else {
        res.status(405).json({message: 'Method not allowed.'})
    }
}
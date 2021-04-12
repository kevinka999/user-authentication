import { NextApiRequest, NextApiResponse } from "next";
import { connectDb } from '../../database/connectDb';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface userLoginData {
    email: string;
    password: string;
}

interface NextLoginRequest extends NextApiRequest{
    body: userLoginData;
}

export default async function login(req: NextLoginRequest, res: NextApiResponse) {
    if (req.method === 'POST'){
        const db = await connectDb();
        
        const user = await db.get(
            'SELECT * FROM user WHERE email = ?', 
            [ req.body.email ]
        );

        compare(req.body.password, user.password, (error, result) => {
            if(!error && result){
                const jwt = sign({
                    userName: user.name
                }, process.env.JWT_SECRET, {expiresIn: '1h'});

                res.status(200).json({authToken: jwt});
            }
            else {
                res.status(405).json({message: 'Something wrong. try again!'});
            }
        });
    }
    else {
        res.status(405).json({message: 'Method not allowed.'})
    }
}
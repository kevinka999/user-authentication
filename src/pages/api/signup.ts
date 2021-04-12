import { NextApiRequest, NextApiResponse } from "next";
import { connectDb } from '../../database/connectDb';
import { hash } from 'bcrypt';

interface userSignupData {
    name: string;
    email: string;
    password: string;
}

interface NextSignupRequest extends NextApiRequest {
    body: userSignupData;
}

export default async function signup(req: NextSignupRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        hash(req.body.password, 10, async (error, hashedPassword) => {
            if(!error){
                const db = await connectDb();
                const statement = await db.prepare('INSERT INTO user (name, email, password) VALUES (?,?,?)');
    
                await statement.run(
                    req.body.name, 
                    req.body.email, 
                    hashedPassword
                );
    
                res.status(200);
            }
            else {
                res.status(500).json({message: error.message});
            }
        })
    } 
    else {
        res.status(405).json({message: 'Method not allowed.'})
    }
}
import { NextApiRequest, NextApiResponse } from "next";
import { decode } from 'jsonwebtoken';
import { connectDb } from '../../database/connectDb';

import { isAuthenticated } from './middleware/authentication'

export default isAuthenticated(async function user(req: NextApiRequest, res: NextApiResponse) {
    const authToken = req.cookies.authToken;

    if (req.method === 'GET' && authToken) {
        const db = await connectDb();

        const { payload } = decode(authToken, {complete: true});
        const userId = payload.userId;

        const userInformation = await db.get('SELECT name, email FROM user WHERE id = ?', [
            userId
        ]);

        if (userInformation)
            res.status(200).json(userInformation);
        else
            res.status(404).json({message: 'User not found.'});
    }
    else {
        res.status(401).json({message: 'You dont have authorization to do that.'});
    }
});
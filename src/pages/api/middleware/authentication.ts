import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';

export function isAuthenticated(fn: NextApiHandler) {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        verify(req.headers.authorization!, process.env.JWT_SECRET, async (error, jwtDecoded) => {
            if (!error && jwtDecoded){
                return await fn(req, res);
            }
            else {
                res.status(401).json({message: 'You are not authenticated on the System. Please, log-in first.'});
            }
        });
    };
}
import { NextApiRequest, NextApiResponse } from "next";
import { isAuthenticated } from './middleware/authentication';

export default isAuthenticated(async function authTest(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({message: 'Is authenticated', jwt: req.headers.authorization});
});
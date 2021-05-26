import { NextApiRequest, NextApiResponse} from 'next'

export default async function logout(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Set-Cookie', 'authToken=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT');

    return res.status(200).end();
}
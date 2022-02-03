import * as express from 'express';
import db from '../../db';

const router = express.Router();

router.get('/:ip', async (req, res) => {
    const ip = req.params.ip;
    try {
        const ip_location = await db.ip.one(ip);
        res.json(ip_location);
    } catch (err: unknown) {
        console.log(err);
        let err_message = "";
        if (err instanceof Error) {
            err_message = err.message;
        }
        res.status(500).json({ err: err_message });
    }
});

export default router;
import * as express from 'express';
import ipRouter from './ip';

const router = express.Router();

router.use('/ip', ipRouter);

export default router;
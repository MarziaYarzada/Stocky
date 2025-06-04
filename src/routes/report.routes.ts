import express from 'express';
import { getReport } from '../controllers/report.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = express.Router();

router.get('/', authenticate, getReport);

export default router;

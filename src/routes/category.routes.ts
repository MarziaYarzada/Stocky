import express from 'express';
import { addCategory, getCategories } from '../controllers/category.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/',authenticate, addCategory);
router.get('/', authenticate,getCategories);

export default router;

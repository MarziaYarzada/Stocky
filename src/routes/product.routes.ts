import express from 'express';
import * as ctrl from '../controllers/product.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = express.Router();

router.get('/',  ctrl.getProducts);
router.post('/', ctrl.addProduct);
router.put('/:id', ctrl.updateProductById);
router.delete('/:id', ctrl.deleteProductById);

export default router;

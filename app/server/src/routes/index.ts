import { Router } from 'express';
import categoriesRouter from './categories.routes';
import ProductsRouter from './products.routes';

const router = Router();

router.use('/categories', categoriesRouter);
router.use('/products', ProductsRouter);

export default router;

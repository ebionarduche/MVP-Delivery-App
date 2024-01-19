import { Router } from 'express';
import categoriesRouter from './categories.routes';
import productsRouter from './products.routes';
import loginRouter from './login.routes';

const router = Router();

router.use('/categories', categoriesRouter);
router.use('/products', productsRouter);
router.use('/', loginRouter);

export default router;

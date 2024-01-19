import { Router } from 'express';
import categoriesRouter from './categories.routes';
import productsRouter from './products.routes';
import productsTypeRouter from './productsType.routes';
import loginRouter from './login.routes';
import restaurantsRouter from './restaurants.routes';

const router = Router();

router.use('/categories', categoriesRouter);
router.use('/products', productsRouter);
router.use('/products-type', productsTypeRouter);
router.use('/login', loginRouter);
router.use('/restaurants', restaurantsRouter);

export default router;

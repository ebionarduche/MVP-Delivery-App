import { Request, Response, Router } from 'express';
import ProductsController from '../controllers/ProductsControllers';

const productsController = new ProductsController();
const router = Router();

router.get('/', (req: Request, res: Response) => productsController.getAll(req, res));

export default router;

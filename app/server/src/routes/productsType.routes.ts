import { Request, Response, Router } from 'express';
import ProductTypeController from '../controllers/ProductsTypeControllers';

const productTypeController = new ProductTypeController();
const router = Router();

router.get('/', (req: Request, res: Response) => productTypeController.getAll(req, res));

export default router;

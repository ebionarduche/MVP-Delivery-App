import { Request, Response, Router } from 'express';
import ProductsController from '../controllers/ProductsControllers';

const productsController = new ProductsController();
const router = Router();

router.get('/', (req: Request, res: Response) => productsController.getAll(req, res));
router.get('/type/:id', (req: Request, res: Response) => productsController.findByProductType(req, res));

export default router;


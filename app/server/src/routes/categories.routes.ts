import { Request, Response, Router } from 'express';
import CategoriesController from '../controllers/CategoriesControllers';

const categoriesController = new CategoriesController();
const router = Router();

router.get('/', (req: Request, res: Response) => categoriesController.getAll(req, res));

export default router;

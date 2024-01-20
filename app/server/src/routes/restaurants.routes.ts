import { Request, Response, Router } from 'express';
import RestaurantsController from '../controllers/RestaurantsControllers';

const restaurantsController = new RestaurantsController();
const router = Router();

router.get('/', (req: Request, res: Response) => restaurantsController.getAll(req, res));
router.get('/search', (req: Request, res: Response) => restaurantsController.findByQuery(req, res));

export default router;

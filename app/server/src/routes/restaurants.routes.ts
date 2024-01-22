import { Request, Response, Router } from 'express';
import RestaurantsController from '../controllers/RestaurantsControllers';

const restaurantsController = new RestaurantsController();
const router = Router();

router.get('/', (req: Request, res: Response) => restaurantsController.getAll(req, res));
router.get('/find/:id', (req: Request, res: Response) => restaurantsController.findById(req, res));
router.get('/search', (req: Request, res: Response) => restaurantsController.findByQuery(req, res));
router.get('/category/:id', (req: Request, res: Response) => restaurantsController.findByCategoryId(req, res));


export default router;

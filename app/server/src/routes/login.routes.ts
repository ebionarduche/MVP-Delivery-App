import { Request, Response, Router } from 'express';
import UsersControllers from '../controllers/UsersControllers';

const usersControllers = new UsersControllers();
const router = Router();

router.post('/', (req: Request, res: Response) => usersControllers.login(req, res));

export default router;

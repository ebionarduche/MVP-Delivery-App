import { Request, Response } from 'express';
import UsersService from '../services/UsersService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UsersController {
	constructor(private usersService = new UsersService()) {}

	public async login(req: Request, res: Response) {
		try {
			const {status, data} = await this.usersService.login(req.body);
			return res.status(mapStatusHTTP(status)).json(data);
		}
		catch {
			return res.status(500).json({message: 'Internal Error'});
		}
	}

	public async CreateNewUser(req: Request, res: Response) {
		try {
			const {status, data} = await this.usersService.CreateNewUser(req.body);
			return res.status(mapStatusHTTP(status)).json(data);
		}
		catch {
			return res.status(500).json({message: 'Internal Error'});
		}
	}
}

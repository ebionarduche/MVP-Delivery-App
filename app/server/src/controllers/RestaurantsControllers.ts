import { Request, Response } from 'express';
import RestaurantsService from '../services/RestaurantsService'; 
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class RestaurantsController {
	constructor(private restaurantsService = new RestaurantsService()) {}

	public async getAll(_req: Request, res: Response) {
		try {
			const {status, data} = await this.restaurantsService.getAll();
			return res.status(mapStatusHTTP(status)).json(data);
		}
		catch {
			return res.status(500).json({message: 'Internal Error'});
		}
	}
}

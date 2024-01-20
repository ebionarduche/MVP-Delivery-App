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
		catch(e) {
			console.log(e);
			return res.status(500).json({message: 'Internal Error'});
		}
	}

	public async findByQuery(req: Request, res: Response) {
		try {
			const { query } = req.query;
			console.log(query);
			if(!query) {
				return res.status(400).json({ message: 'The query parameter is required' });
			}
			const {status, data} = await this.restaurantsService.findByQuery(query as string);
			return res.status(mapStatusHTTP(status)).json(data);
		}
		catch(e) {
			console.log(e);
			return res.status(500).json({message: 'Internal Error'});
		}
	}
}

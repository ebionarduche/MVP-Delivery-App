import { Request, Response } from 'express';
import CategoriesService from '../services/CategoriesService';
import mapStatusHTTP from '../utils/mapStatusHTTP';


export default class CategoriesController {
	constructor(private categoriesService = new CategoriesService()) {}

	public async getAll(_req: Request, res: Response) {
		try {
			const { status, data } = await this.categoriesService.getAll();
			return res.status(mapStatusHTTP(status)).json(data);
		}
		catch {
			return res.status(500).json({message: 'Internal Error'});
		}
	}
}

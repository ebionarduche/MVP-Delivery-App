import { Request, Response } from 'express';
import ProductsService from '../services/ProductsService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class ProductsController {
	constructor(private productsService = new ProductsService()) {}

	public async getAll(_req: Request, res: Response) {
		try {
			const {status, data} = await this.productsService.getAll();
			return res.status(mapStatusHTTP(status)).json(data);
		}
		catch {
			const { data } = await this.productsService.getAll();
			console.log(data);
		
			return res.status(500).json({message: 'Internal Error'});
		}
	}
}

import { Request, Response } from 'express';
import ProductsService from '../services/ProductsService';


export default class ProductsController {
	constructor(private productsService = new ProductsService()) {}

	public async getAll(_req: Request, res: Response) {
		const serviceResponse = await this.productsService.getAll();
		return res.status(200).json(serviceResponse.data);
	}
}

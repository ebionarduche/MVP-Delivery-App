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

	public async findByProductType(req: Request, res: Response) {
		try {
			const { typeId, restaurantsId } = req.body;
			if(!typeId || !restaurantsId) {
				return res.status(400).json({ message: 'The id parameter is required' });
			}
			const {status, data} = await this.productsService.findByProductType(typeId, restaurantsId);
			return res.status(mapStatusHTTP(status)).json(data);
		}
		catch(e) {
			console.log(e);
			return res.status(500).json({message: 'Internal Error'});
		}
	}
}

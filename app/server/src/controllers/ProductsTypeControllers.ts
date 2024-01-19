import { Request, Response } from 'express';
import ProductTypeService from '../services/ProductsTypeService';
import mapStatusHTTP from '../utils/mapStatusHTTP';


export default class ProductTypeController {
	constructor(private productTypeService = new ProductTypeService()) {}

	public async getAll(_req: Request, res: Response) {
		try {
			const { status, data } = await this.productTypeService.getAll();
			return res.status(mapStatusHTTP(status)).json(data);
		}
		catch {
			return res.status(500).json({message: 'Internal Error'});
		}
	}
}

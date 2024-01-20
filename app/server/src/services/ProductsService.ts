import ProductsModel from '../models/ProductsModel';
import { IProducts, IProductsModel } from '../interfaces/IProducts';
import { ServiceResponse } from '../interfaces/ServiceResponse';


export default class ProductsService {
	constructor(private productsModel: IProductsModel = new ProductsModel() ) {}

	public async getAll(): Promise<ServiceResponse<IProducts[]>> {
		const products = await this.productsModel.findAll();
		if(!products) {
			return {status: 'BAD_REQUEST', data: {message: 'Something went wrong'} };
		}
		return { status: 'SUCCESS', data: products };
	}
}

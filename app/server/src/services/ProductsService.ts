import ProductsModel from '../models/ProductsModel';
import { IProducts, IProductsModel } from '../interfaces/IProducts';
import { ServiceResponse } from '../interfaces/ServiceResponse';



export default class ProductsService {
	constructor(private productsModel: IProductsModel = new ProductsModel() ) {}

	public async getAll(): Promise<ServiceResponse<IProducts[]>> {
		const categories = await this.productsModel.findAll();
		return { status: 'SUCCESS', data: categories };
	}

}

import Products from '../database/model/Products';
import { IProducts, IProductsModel } from '../interfaces/IProducts';

export default class ProductsModel implements IProductsModel {
	private model = Products;

	async findAll(): Promise<IProducts[]> {
		const data = await this.model.findAll();
		return data;
	}
}
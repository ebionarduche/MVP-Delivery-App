import ProductType from '../database/model/ProductType';
import { IProductType, IProductTypeModel } from '../interfaces/IProductType';

export default class ProductTypeModel implements IProductTypeModel  {
	private model = ProductType;

	async findAll(): Promise<IProductType[]>{
		const data = await this.model.findAll();
		return data;
	}
}
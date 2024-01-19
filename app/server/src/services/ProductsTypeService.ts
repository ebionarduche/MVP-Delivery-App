import ProductTypeModel from '../models/ProductsTypeModel';
import { IProductType, IProductTypeModel } from '../interfaces/IProductType';
import { ServiceResponse } from '../interfaces/ServiceResponse';



export default class ProductTypeService {
	constructor(private productTypeModel: IProductTypeModel = new ProductTypeModel() ) {}

	public async getAll(): Promise<ServiceResponse<IProductType[]>> {
		
		const categories = await this.productTypeModel.findAll();
		if(!categories) {
			return {status: 'BAD_REQUEST', data: {message: 'Something went wrong'} };
		}
		return { status: 'SUCCESS', data: categories };
	}
}

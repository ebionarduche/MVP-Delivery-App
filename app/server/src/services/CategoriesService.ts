import CategoriesModel from '../models/CategoriesModel';
import { ICategoriesModel,  ICategories } from '../interfaces/ICategories';
import { ServiceResponse } from '../interfaces/ServiceResponse';



export default class CategoriesService {
	constructor(private categoriesModel: ICategoriesModel = new CategoriesModel() ) {}

	public async getAll(): Promise<ServiceResponse<ICategories[]>> {
		
		const categories = await this.categoriesModel.findAll();
		if(!categories) {
			return {status: 'BAD_REQUEST', data: {message: 'Something went wrong'} };
		}
		return { status: 'SUCCESS', data: categories };
	}
}

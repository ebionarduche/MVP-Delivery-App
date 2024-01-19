import CategoriesModel from '../models/CategoriesModel';
import { ICategoriesModel,  ICategories } from '../interfaces/ICategories';
import { ServiceResponse } from '../interfaces/ServiceResponse';



export default class CategoriesService {
	constructor(private categoriesModel: ICategoriesModel = new CategoriesModel() ) {}

	public async getAll(): Promise<ServiceResponse<ICategories[]>> {
		const categories = await this.categoriesModel.findAll();
		return { status: 'SUCCESS', data: categories };
	}
}

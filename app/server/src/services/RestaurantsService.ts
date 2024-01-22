import RestaurantsModel from '../models/RestaurantsModel';
import { IRestaurants, IRestaurantsModel } from '../interfaces/IRestaurants';
import { ServiceResponse } from '../interfaces/ServiceResponse';


export default class RestaurantsService {
	constructor(private restaurantsModel: IRestaurantsModel = new RestaurantsModel() ) {}

	public async getAll(): Promise<ServiceResponse<IRestaurants[]>> {
		const retaurants = await this.restaurantsModel.findAll();
		if(!retaurants) {
			return {status: 'BAD_REQUEST', data: {message: 'Something went wrong'} };
		}
		return { status: 'SUCCESS', data: retaurants };
	}

	public async findById(id: number): Promise<ServiceResponse<IRestaurants>> {
		const retaurants = await this.restaurantsModel.findById(id);
		if(!retaurants) {
			return {status: 'BAD_REQUEST', data: {message: 'Something went wrong'} };
		}
		return { status: 'SUCCESS', data: retaurants };
	}

	public async findByQuery(query: string): Promise<ServiceResponse<IRestaurants[]>> {
		const retaurants = await this.restaurantsModel.findByQuery(query);
		if(!retaurants) {
			return {status: 'BAD_REQUEST', data: {message: 'Something went wrong'} };
		}
		return { status: 'SUCCESS', data: retaurants };
	}

	public async findByCategoryId(id: number): Promise<ServiceResponse<IRestaurants[]>> {
		const retaurants = await this.restaurantsModel.findByCategoryId(id);
		if(!retaurants) {
			return {status: 'BAD_REQUEST', data: {message: 'Something went wrong'} };
		}
		return { status: 'SUCCESS', data: retaurants };
	}
}

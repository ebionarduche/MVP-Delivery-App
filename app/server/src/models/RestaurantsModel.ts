import Restaurants from '../database/model/Restaurants';
import { IRestaurants, IRestaurantsModel } from '../interfaces/IRestaurants';

export default class RestaurantsModel implements IRestaurantsModel {
	private model = Restaurants;

	async findAll(): Promise<IRestaurants[]> {
		const data = await this.model.findAll();
		return data;
	}
}
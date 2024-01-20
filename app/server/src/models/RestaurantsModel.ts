import Categories from '../database/model/Categories';
import Restaurants from '../database/model/Restaurants';
import { IRestaurants, IRestaurantsModel } from '../interfaces/IRestaurants';
import { Op } from 'sequelize';


export default class RestaurantsModel implements IRestaurantsModel {
	private model = Restaurants;

	async findAll(): Promise<IRestaurants[]> {
		const data = await this.model.findAll({
			attributes: ['id','restaurantName', 'description', 'address', 'phone', 'logo'],
			include: {
				model: Categories,
				attributes: ['id', 'category' ],
				as: 'categories',
			},
		});
		return data;
	}

	async findByQuery(query: string): Promise<IRestaurants[]> {
		const data = await this.model.findAll({
			attributes: ['id', 'restaurantName', 'description', 'address', 'phone', 'logo'],
			include: {
				model: Categories,
				attributes: ['id', 'category'],
				as: 'categories',
			},
			where: {
				restaurantName: {
					[Op.like]: `%${query}%`,
				},
			},
		});
		return data;
	}
}

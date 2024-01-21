import Products from '../database/model/Products';
import Categories from '../database/model/Categories';
import Restaurants from '../database/model/Restaurants';
import { IRestaurants, IRestaurantsModel } from '../interfaces/IRestaurants';
import { Op } from 'sequelize';


export default class RestaurantsModel implements IRestaurantsModel {
	private model = Restaurants;

	async findAll(): Promise<IRestaurants[]> {
		const data = await this.model.findAll({
			attributes: ['id','restaurantName', 'resume', 'address', 'phone', 'logo', 'wallpaper'],
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
			attributes: ['id', 'restaurantName', 'resume', 'address', 'phone', 'logo', 'wallpaper' ],
			include: [
				{
					model: Categories,
					attributes: ['id', 'category'],
					as: 'categories',
				},
				{
					model: Products,
					attributes: ['productName', 'description'],
					as: 'products',
				}
			],
			where: {
				[Op.or]: [
					{ 'restaurantName': { [Op.like]: `%${query}%` } },
				// { 'description': { [Op.like]: `%${query}%` } },
				// { 'productName': { [Op.like]: `%${query}%` } },
				],
			},
		});
		return data;
	}
}

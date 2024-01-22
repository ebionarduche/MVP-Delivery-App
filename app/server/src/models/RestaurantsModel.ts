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

	async findById(id: number): Promise<IRestaurants | null> {
		const data = await this.model.findByPk(id, {
			attributes: ['id', 'restaurantName', 'resume', 'address', 'phone', 'logo', 'wallpaper'],
			include: [
				{
					model: Categories,
					attributes: ['id', 'category'],
					as: 'categories',
				},
			],
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
					{ '$products.description$': { [Op.like]: `%${query}%` } },
					{ '$products.product_name$': { [Op.like]: `%${query}%` } },
				],
			},
		});
		return data;
	}
	
	async findByCategoryId(id: number): Promise<IRestaurants[]> {
		const data = await this.model.findAll({
			attributes: ['id', 'restaurantName', 'resume', 'address', 'phone', 'logo', 'wallpaper' ],
			include: [
				{
					model: Categories,
					attributes: ['id', 'category'],
					as: 'categories',
					where: {
						id: id,
					},
				},
			],
		});
		return data;
	}

}

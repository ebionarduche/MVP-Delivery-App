import Restaurants from '../database/model/Restaurants';
import Products from '../database/model/Products';
import ProductType from '../database/model/ProductType';
import { IProducts, IProductsModel } from '../interfaces/IProducts';

export default class ProductsModel implements IProductsModel {
	private model = Products;

	async findAll(): Promise<IProducts[]> {
		const data = await this.model.findAll({
			attributes: ['id', 'productName', 'description', 'price', 'illustration'],
			include: [
				{
					model: Restaurants,
					attributes: ['id', 'restaurantName'],
					as: 'restaurant'
				},
				{
					model: ProductType,
					attributes: ['id', 'type'],
					as: 'product_types'
				}
			]
		});
		return data;
	}

	async findByProductType(typeId: number, restaurantsId: number) : Promise<IProducts[]> {
		const data = await this.model.findAll({
			attributes: ['id', 'productName', 'description', 'price', 'illustration'],
			include: [
				{
					model: Restaurants,
					attributes: ['id', 'restaurantName'],
					as: 'restaurant',
					where: {
						id: restaurantsId,
					}
				},
				{
					model: ProductType,
					attributes: ['id', 'type'],
					as: 'product_types',
					where: {
						id: typeId,
					}
				}
			]
		});
		return data;
	}
		
}
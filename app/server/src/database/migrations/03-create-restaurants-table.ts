import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IRestaurants } from '../../interfaces/IRestaurants';

export default {
	up(queryInterface: QueryInterface) {
		return queryInterface.createTable<Model<IRestaurants>>('restaurants', {
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			restaurantName: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'restaurant_name',
			},
			categoryId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				field: 'category_id',
				references: {
					model: 'categories',
					key: 'id',
				}
			},
			resume: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			address: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			phone: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			logo: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			wallpaper: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			
		});
	},
	down(queryInterface: QueryInterface) {
		return queryInterface.dropTable('restaurants');
	},
};

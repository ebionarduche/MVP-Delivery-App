import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IProducts } from '../../interfaces/IProducts';

export default {
	up(queryInterface: QueryInterface) {
		return queryInterface.createTable<Model<IProducts>>('products', {
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			productName: {
				type: DataTypes.STRING,
				field: 'product_name',
				allowNull: false,
			},
			restaurantId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				field: 'restaurant_id',
				references: {
					model: 'restaurants',
					key: 'id',
				}
			},
			typeId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				field: 'type_id',
				references: {
					model: 'product_types',
					key: 'id',
				}
			},
			description: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			price: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
			},
			illustration: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		});
	},
	down(queryInterface: QueryInterface) {
		return queryInterface.dropTable('products');
	},
};

import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IProductType } from '../../interfaces/IProductType';

export default {
	up(queryInterface: QueryInterface) {
		return queryInterface.createTable<Model<IProductType>>('product_types', {
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			type: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		});
	},
	down(queryInterface: QueryInterface) {
		return queryInterface.dropTable('product_types');
	},
};

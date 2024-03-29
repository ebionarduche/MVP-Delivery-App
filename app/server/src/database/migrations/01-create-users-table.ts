import { Model, QueryInterface, DataTypes } from 'sequelize';
import { IUsers } from '../../interfaces/IUsers';

export default {
	up(queryInterface: QueryInterface) {
		return queryInterface.createTable<Model<IUsers>>('users', {
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			userName: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'user_name',
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			password: {
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
		});
	},
	down(queryInterface: QueryInterface) {
		return queryInterface.dropTable('users');
	},
};

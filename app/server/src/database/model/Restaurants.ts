import {
	DataTypes,
	Model,
	InferAttributes,
	InferCreationAttributes,
} from 'sequelize';
import db from '.';
import Categories from './Categories';


class Restaurants extends Model<InferAttributes<Restaurants>,
InferCreationAttributes<Restaurants>> {
	declare id: number;
	declare restaurantName: string;
	declare categoryId: number;
	declare description: string;
	declare address: string;
	declare phone: string;
	declare logo: string;
}

Restaurants.init({
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
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
	description: {
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
}, {
	sequelize: db,
	modelName: 'restaurants',
	timestamps: false,
	underscored: true,
});

Restaurants.belongsTo(Categories, { foreignKey: 'categories_id', as: 'categories' });


export default Restaurants;

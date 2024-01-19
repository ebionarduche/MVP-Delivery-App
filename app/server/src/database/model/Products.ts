import {
	DataTypes,
	Model,
	InferAttributes,
	InferCreationAttributes,
} from 'sequelize';
import db from '.';
import ProductType from './ProductType';
import Restaurants from './Restaurants';


class Products extends Model<InferAttributes<Products>,
InferCreationAttributes<Products>> {
	declare id: number;
	declare productName: string;
	declare restaurantId: number;
	declare typeId: number;
	declare description: string;
	declare price: number;
	declare illustration: string;
}

Products.init({
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
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
}, {
	sequelize: db,
	modelName: 'products',
	timestamps: false,
	underscored: true,
});

Products.belongsTo(Restaurants, { foreignKey: 'restaurant_id', as: 'restaurant' });
Products.belongsTo(ProductType, { foreignKey: 'typeId', as: 'product_types' });


export default Products;

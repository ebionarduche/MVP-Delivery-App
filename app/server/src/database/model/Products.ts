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
		allowNull: false,
	},
	restaurantId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			model: 'restaurants',
			key: 'id',
		}
	},
	typeId: {
		type: DataTypes.INTEGER,
		allowNull: false,
		references: {
			model: 'productType',
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

Products.belongsTo(Restaurants, { foreignKey: 'restaurantId', as: 'restaurant' });
Products.belongsTo(ProductType, { foreignKey: 'typeId', as: 'productType' });


export default Products;

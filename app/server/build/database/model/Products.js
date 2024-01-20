"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const ProductType_1 = __importDefault(require("./ProductType"));
const Restaurants_1 = __importDefault(require("./Restaurants"));
class Products extends sequelize_1.Model {
}
Products.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    productName: {
        type: sequelize_1.DataTypes.STRING,
        field: 'product_name',
        allowNull: false,
    },
    restaurantId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        field: 'restaurant_id',
        references: {
            model: 'restaurants',
            key: 'id',
        }
    },
    typeId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        field: 'type_id',
        references: {
            model: 'product_types',
            key: 'id',
        }
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    illustration: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'products',
    timestamps: false,
    underscored: true,
});
Products.belongsTo(Restaurants_1.default, { foreignKey: 'restaurant_id', as: 'restaurant' });
Restaurants_1.default.hasMany(Products, { foreignKey: 'restaurant_id', as: 'products' });
Products.belongsTo(ProductType_1.default, { foreignKey: 'typeId', as: 'product_types' });
exports.default = Products;
//# sourceMappingURL=Products.js.map
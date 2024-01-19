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
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    restaurantId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'restaurants',
            key: 'id',
        }
    },
    typeId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'productType',
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
Products.belongsTo(Restaurants_1.default, { foreignKey: 'restaurantId', as: 'restaurant' });
Products.belongsTo(ProductType_1.default, { foreignKey: 'typeId', as: 'productType' });
exports.default = Products;
//# sourceMappingURL=Products.js.map
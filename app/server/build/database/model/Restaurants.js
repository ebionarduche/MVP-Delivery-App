"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const Categories_1 = __importDefault(require("./Categories"));
class Restaurants extends sequelize_1.Model {
}
Restaurants.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    restaurantName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    categoryId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'categories',
            key: 'id',
        }
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    logo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'restaurants',
    timestamps: false,
    underscored: true,
});
Restaurants.belongsTo(Categories_1.default, { foreignKey: 'categories_id', as: 'categories' });
exports.default = Restaurants;
//# sourceMappingURL=Restaurants.js.map
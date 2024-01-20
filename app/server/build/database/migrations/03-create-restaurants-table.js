"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('restaurants', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            restaurantName: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                field: 'restaurant_name',
            },
            categoryId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                field: 'category_id',
                references: {
                    model: 'categories',
                    key: 'id',
                }
            },
            resume: {
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
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('restaurants');
    },
};
//# sourceMappingURL=03-create-restaurants-table.js.map
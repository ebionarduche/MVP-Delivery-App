"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('products', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
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
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('products');
    },
};
//# sourceMappingURL=05-create-product.js.map
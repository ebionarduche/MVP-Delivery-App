"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return queryInterface.createTable('users', {
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            userName: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            password: {
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
        });
    },
    down(queryInterface) {
        return queryInterface.dropTable('users');
    },
};
//# sourceMappingURL=01-create-users-table.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Products_1 = __importDefault(require("../database/model/Products"));
const Categories_1 = __importDefault(require("../database/model/Categories"));
const Restaurants_1 = __importDefault(require("../database/model/Restaurants"));
const sequelize_1 = require("sequelize");
class RestaurantsModel {
    constructor() {
        this.model = Restaurants_1.default;
    }
    async findAll() {
        const data = await this.model.findAll({
            attributes: ['id', 'restaurantName', 'resume', 'address', 'phone', 'logo', 'wallpaper'],
            include: {
                model: Categories_1.default,
                attributes: ['id', 'category'],
                as: 'categories',
            },
        });
        return data;
    }
    async findById(id) {
        const data = await this.model.findAll({
            attributes: ['id', 'restaurantName', 'resume', 'address', 'phone', 'logo', 'wallpaper'],
            include: [
                {
                    model: Categories_1.default,
                    attributes: ['id', 'category'],
                    as: 'categories',
                },
            ],
            where: {
                id: id,
            },
        });
        return data;
    }
    async findByQuery(query) {
        const data = await this.model.findAll({
            attributes: ['id', 'restaurantName', 'resume', 'address', 'phone', 'logo', 'wallpaper'],
            include: [
                {
                    model: Categories_1.default,
                    attributes: ['id', 'category'],
                    as: 'categories',
                },
                {
                    model: Products_1.default,
                    attributes: ['productName', 'description'],
                    as: 'products',
                }
            ],
            where: {
                [sequelize_1.Op.or]: [
                    { 'restaurantName': { [sequelize_1.Op.like]: `%${query}%` } },
                    { '$products.description$': { [sequelize_1.Op.like]: `%${query}%` } },
                    { '$products.product_name$': { [sequelize_1.Op.like]: `%${query}%` } },
                ],
            },
        });
        return data;
    }
    async findByCategoryId(id) {
        const data = await this.model.findAll({
            attributes: ['id', 'restaurantName', 'resume', 'address', 'phone', 'logo', 'wallpaper'],
            include: [
                {
                    model: Categories_1.default,
                    attributes: ['id', 'category'],
                    as: 'categories',
                    where: {
                        id: id,
                    },
                },
            ],
        });
        return data;
    }
}
exports.default = RestaurantsModel;
//# sourceMappingURL=RestaurantsModel.js.map
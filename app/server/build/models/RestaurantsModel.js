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
            attributes: ['id', 'restaurantName', 'description', 'address', 'phone', 'logo'],
            include: {
                model: Categories_1.default,
                attributes: ['id', 'category'],
                as: 'categories',
            },
        });
        return data;
    }
    async findByQuery(query) {
        const data = await this.model.findAll({
            attributes: ['id', 'restaurantName', 'resume', 'address', 'phone', 'logo',],
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
                    // { 'description': { [Op.like]: `%${query}%` } },
                    // { 'productName': { [Op.like]: `%${query}%` } },
                ],
            },
        });
        return data;
    }
}
exports.default = RestaurantsModel;
// const postSearchService = async (searchTerm) => {
//   if (!searchTerm) return postGetAllService();
//   const posts = await BlogPost.findAll({
//     where: { [Op.or]: [
//       { title: { [Op.like]: %${searchTerm}% } },
//       { content: { [Op.like]: %${searchTerm}% } },
//     ] },
//     include: [
//       { model: User, as: 'user', attributes: { exclude: ['password'] } },
//       { model: Category, as: 'categories' },
//     ],
//   });
//   if (!posts.length) return { status: 'SUCCESSFUL', data: [] };
//   return { status: 'SUCCESSFUL', data: posts };
// };
// where: {
// 	restaurantName: {
// 			[sequelize_1.Op.iLike]: `%${query}%`,
// 	},
// },
//# sourceMappingURL=RestaurantsModel.js.map
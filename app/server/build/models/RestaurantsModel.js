"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Categories_1 = __importDefault(require("../database/model/Categories"));
const Restaurants_1 = __importDefault(require("../database/model/Restaurants"));
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
}
exports.default = RestaurantsModel;
//# sourceMappingURL=RestaurantsModel.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Restaurants_1 = __importDefault(require("../database/model/Restaurants"));
const Products_1 = __importDefault(require("../database/model/Products"));
const ProductType_1 = __importDefault(require("../database/model/ProductType"));
class ProductsModel {
    constructor() {
        this.model = Products_1.default;
    }
    async findAll() {
        const data = await this.model.findAll({
            attributes: ['id', 'productName', 'description', 'price', 'illustration'],
            include: [
                {
                    model: Restaurants_1.default,
                    attributes: ['id', 'restaurantName'],
                    as: 'restaurant'
                },
                {
                    model: ProductType_1.default,
                    attributes: ['id', 'type'],
                    as: 'product_types'
                }
            ]
        });
        return data;
    }
}
exports.default = ProductsModel;
//# sourceMappingURL=ProductsModel.js.map
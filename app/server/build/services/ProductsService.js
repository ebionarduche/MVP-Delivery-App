"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductsModel_1 = __importDefault(require("../models/ProductsModel"));
class ProductsService {
    constructor(productsModel = new ProductsModel_1.default()) {
        this.productsModel = productsModel;
    }
    async getAll() {
        const categories = await this.productsModel.findAll();
        return { status: 'SUCCESS', data: categories };
    }
}
exports.default = ProductsService;
//# sourceMappingURL=ProductsService.js.map
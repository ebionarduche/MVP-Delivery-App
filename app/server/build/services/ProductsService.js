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
        const products = await this.productsModel.findAll();
        if (!products) {
            return { status: 'BAD_REQUEST', data: { message: 'Something went wrong' } };
        }
        return { status: 'SUCCESS', data: products };
    }
}
exports.default = ProductsService;
//# sourceMappingURL=ProductsService.js.map
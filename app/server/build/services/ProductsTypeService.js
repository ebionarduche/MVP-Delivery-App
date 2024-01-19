"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductsTypeModel_1 = __importDefault(require("../models/ProductsTypeModel"));
class ProductTypeService {
    constructor(productTypeModel = new ProductsTypeModel_1.default()) {
        this.productTypeModel = productTypeModel;
    }
    async getAll() {
        const categories = await this.productTypeModel.findAll();
        if (!categories) {
            return { status: 'BAD_REQUEST', data: { message: 'Something went wrong' } };
        }
        return { status: 'SUCCESS', data: categories };
    }
}
exports.default = ProductTypeService;
//# sourceMappingURL=ProductsTypeService.js.map
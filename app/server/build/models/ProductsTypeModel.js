"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductType_1 = __importDefault(require("../database/model/ProductType"));
class ProductTypeModel {
    constructor() {
        this.model = ProductType_1.default;
    }
    async findAll() {
        const data = await this.model.findAll();
        return data;
    }
}
exports.default = ProductTypeModel;
//# sourceMappingURL=ProductsTypeModel.js.map
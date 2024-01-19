"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Products_1 = __importDefault(require("../database/model/Products"));
class ProductsModel {
    constructor() {
        this.model = Products_1.default;
    }
    async findAll() {
        const data = await this.model.findAll();
        return data;
    }
}
exports.default = ProductsModel;
//# sourceMappingURL=ProductsModel.js.map
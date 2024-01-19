"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductsService_1 = __importDefault(require("../services/ProductsService"));
class ProductsController {
    constructor(productsService = new ProductsService_1.default()) {
        this.productsService = productsService;
    }
    async getAll(_req, res) {
        const serviceResponse = await this.productsService.getAll();
        return res.status(200).json(serviceResponse.data);
    }
}
exports.default = ProductsController;
//# sourceMappingURL=ProductsControllers.js.map
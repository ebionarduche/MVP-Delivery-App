"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductsService_1 = __importDefault(require("../services/ProductsService"));
const mapStatusHTTP_1 = __importDefault(require("../utils/mapStatusHTTP"));
class ProductsController {
    constructor(productsService = new ProductsService_1.default()) {
        this.productsService = productsService;
    }
    async getAll(_req, res) {
        try {
            const { status, data } = await this.productsService.getAll();
            return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
        }
        catch {
            return res.status(500).json({ message: 'Internal Error' });
        }
    }
}
exports.default = ProductsController;
//# sourceMappingURL=ProductsControllers.js.map
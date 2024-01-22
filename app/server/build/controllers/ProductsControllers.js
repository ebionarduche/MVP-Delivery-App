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
            const { data } = await this.productsService.getAll();
            console.log(data);
            return res.status(500).json({ message: 'Internal Error' });
        }
    }
    async findByProductType(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ message: 'The id parameter is required' });
            }
            const { status, data } = await this.productsService.findByProductType(Number(id));
            return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
        }
        catch (e) {
            console.log(e);
            return res.status(500).json({ message: 'Internal Error' });
        }
    }
}
exports.default = ProductsController;
//# sourceMappingURL=ProductsControllers.js.map
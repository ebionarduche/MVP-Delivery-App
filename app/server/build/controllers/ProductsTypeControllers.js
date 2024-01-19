"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductsTypeService_1 = __importDefault(require("../services/ProductsTypeService"));
const mapStatusHTTP_1 = __importDefault(require("../utils/mapStatusHTTP"));
class ProductTypeController {
    constructor(productTypeService = new ProductsTypeService_1.default()) {
        this.productTypeService = productTypeService;
    }
    async getAll(_req, res) {
        try {
            const { status, data } = await this.productTypeService.getAll();
            return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
        }
        catch {
            const { data } = await this.productTypeService.getAll();
            console.log(data);
            return res.status(500).json({ message: 'Internal Error' });
        }
    }
}
exports.default = ProductTypeController;
//# sourceMappingURL=ProductsTypeControllers.js.map
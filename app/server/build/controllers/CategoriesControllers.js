"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CategoriesService_1 = __importDefault(require("../services/CategoriesService"));
const mapStatusHTTP_1 = __importDefault(require("../utils/mapStatusHTTP"));
class CategoriesController {
    constructor(categoriesService = new CategoriesService_1.default()) {
        this.categoriesService = categoriesService;
    }
    async getAll(_req, res) {
        try {
            const { status, data } = await this.categoriesService.getAll();
            return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
        }
        catch {
            return res.status(500).json({ message: 'Internal Error' });
        }
    }
}
exports.default = CategoriesController;
//# sourceMappingURL=CategoriesControllers.js.map
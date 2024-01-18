"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CategoriesService_1 = __importDefault(require("../services/CategoriesService"));
class CategoriesController {
    constructor(categoriesService = new CategoriesService_1.default()) {
        this.categoriesService = categoriesService;
    }
    async getAll(_req, res) {
        const serviceResponse = await this.categoriesService.getAll();
        console.log(serviceResponse);
        return res.status(200).json({ message: 'oi' });
    }
}
exports.default = CategoriesController;
//# sourceMappingURL=CategoriesControllers.js.map
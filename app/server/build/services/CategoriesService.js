"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CategoriesModel_1 = __importDefault(require("../models/CategoriesModel"));
class CategoriesService {
    constructor(categoriesModel = new CategoriesModel_1.default()) {
        this.categoriesModel = categoriesModel;
    }
    async getAll() {
        const categories = await this.categoriesModel.findAll();
        return { status: 'SUCCESS', data: categories };
    }
}
exports.default = CategoriesService;
//# sourceMappingURL=CategoriesService.js.map
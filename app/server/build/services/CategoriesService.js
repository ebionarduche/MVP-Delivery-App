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
        const categories = this.categoriesModel.findAll();
        console.log(categories);
        return { status: 'SUCCESS', data: 'test' };
    }
}
exports.default = CategoriesService;
//# sourceMappingURL=CategoriesService.js.map
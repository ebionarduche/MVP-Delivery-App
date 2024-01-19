"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Restaurants_1 = __importDefault(require("../database/model/Restaurants"));
class RestaurantsModel {
    constructor() {
        this.model = Restaurants_1.default;
    }
    async findAll() {
        const data = await this.model.findAll();
        return data;
    }
}
exports.default = RestaurantsModel;
//# sourceMappingURL=RestaurantsModel.js.map
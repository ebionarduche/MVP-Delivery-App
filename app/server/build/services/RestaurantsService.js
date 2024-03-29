"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RestaurantsModel_1 = __importDefault(require("../models/RestaurantsModel"));
class RestaurantsService {
    constructor(restaurantsModel = new RestaurantsModel_1.default()) {
        this.restaurantsModel = restaurantsModel;
    }
    async getAll() {
        const retaurants = await this.restaurantsModel.findAll();
        if (!retaurants) {
            return { status: 'BAD_REQUEST', data: { message: 'Something went wrong' } };
        }
        return { status: 'SUCCESS', data: retaurants };
    }
    async findById(id) {
        const retaurants = await this.restaurantsModel.findById(id);
        if (!retaurants) {
            return { status: 'BAD_REQUEST', data: { message: 'Something went wrong' } };
        }
        return { status: 'SUCCESS', data: retaurants };
    }
    async findByQuery(query) {
        const retaurants = await this.restaurantsModel.findByQuery(query);
        if (!retaurants) {
            return { status: 'BAD_REQUEST', data: { message: 'Something went wrong' } };
        }
        return { status: 'SUCCESS', data: retaurants };
    }
    async findByCategoryId(id) {
        const retaurants = await this.restaurantsModel.findByCategoryId(id);
        if (!retaurants) {
            return { status: 'BAD_REQUEST', data: { message: 'Something went wrong' } };
        }
        return { status: 'SUCCESS', data: retaurants };
    }
}
exports.default = RestaurantsService;
//# sourceMappingURL=RestaurantsService.js.map
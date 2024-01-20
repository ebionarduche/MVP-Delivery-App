"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RestaurantsService_1 = __importDefault(require("../services/RestaurantsService"));
const mapStatusHTTP_1 = __importDefault(require("../utils/mapStatusHTTP"));
class RestaurantsController {
    constructor(restaurantsService = new RestaurantsService_1.default()) {
        this.restaurantsService = restaurantsService;
    }
    async getAll(_req, res) {
        try {
            const { status, data } = await this.restaurantsService.getAll();
            return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
        }
        catch {
            return res.status(500).json({ message: 'Internal Error' });
        }
    }
    async findByQuery(req, res) {
        try {
            const { query } = req.query;
            console.log(query);
            if (!query) {
                return res.status(400).json({ message: 'The query parameter is required' });
            }
            const { status, data } = await this.restaurantsService.findByQuery(query);
            return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
        }
        catch (e) {
            console.log(e);
            return res.status(500).json({ message: 'Internal Error' });
        }
    }
}
exports.default = RestaurantsController;
//# sourceMappingURL=RestaurantsControllers.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../services/UserService"));
class CategoriesController {
    constructor(userService = new UserService_1.default()) {
        this.userService = userService;
    }
    async login(_req, res) {
        // const { password } =_req.body;
        const serviceResponse = await this.userService.login();
        return res.status(200).json(serviceResponse);
    }
}
exports.default = CategoriesController;
//# sourceMappingURL=userController.js.map
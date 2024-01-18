"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = __importDefault(require("../models/UserModel"));
// import { ServiceResponse } from '../interfaces/ServiceResponse';
class UserService {
    constructor(userModel = new UserModel_1.default()) {
        this.userModel = userModel;
    }
    async login() {
        // const user = await this.userModel.findbyEmail(data.email);
        return { status: 'SUCCESSFUL', data: { message: 'test' } };
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map
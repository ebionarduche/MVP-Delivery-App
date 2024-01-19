"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsersModel_1 = __importDefault(require("../models/UsersModel"));
class UsersService {
    constructor(usersModel = new UsersModel_1.default()) {
        this.usersModel = usersModel;
    }
    async login(data) {
        const user = await this.usersModel.findbyEmail(data.email);
        if (!user) {
            return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
        }
        return { status: 'SUCCESSFUL', data: user };
    }
}
exports.default = UsersService;
//# sourceMappingURL=UsersService.js.map
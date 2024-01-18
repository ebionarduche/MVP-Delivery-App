"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = __importDefault(require("../database/model/Users"));
class UserModel {
    constructor() {
        this.model = Users_1.default;
    }
    async findbyEmail(email) {
        const user = await this.model.findOne({ where: { email } });
        if (!user)
            return null;
        return user.dataValues;
    }
}
exports.default = UserModel;
//# sourceMappingURL=UserModel.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsersService_1 = __importDefault(require("../services/UsersService"));
const mapStatusHTTP_1 = __importDefault(require("../utils/mapStatusHTTP"));
class UsersController {
    constructor(usersService = new UsersService_1.default()) {
        this.usersService = usersService;
    }
    async login(req, res) {
        try {
            const { status, data } = await this.usersService.login(req.body);
            return res.status((0, mapStatusHTTP_1.default)(status)).json(data);
        }
        catch {
            return res.status(500).json({ message: 'Internal Error' });
        }
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersControllers.js.map
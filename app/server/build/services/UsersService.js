"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = __importStar(require("bcryptjs"));
const UsersModel_1 = __importDefault(require("../models/UsersModel"));
const Token_1 = __importDefault(require("../auth/Token"));
class UsersService {
    constructor(usersModel = new UsersModel_1.default(), JWT = new Token_1.default()) {
        this.usersModel = usersModel;
        this.JWT = JWT;
    }
    async login(data) {
        const user = await this.usersModel.findbyEmail(data.email);
        if (!user) {
            return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
        }
        const { password, ...payload } = user;
        if (!bcrypt.compareSync(data.password, password)) {
            return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
        }
        const token = this.JWT.generateToken(payload);
        return { status: 'SUCCESS', data: { token } };
    }
    async CreateNewUser(data) {
        const user = await this.usersModel.findbyEmail(data.email);
        if (user) {
            return { status: 'BAD_REQUEST', data: { message: 'Email already exists' } };
        }
        const { password, ...rest } = data;
        const hashedPassword = bcrypt.hashSync(password, 8);
        await this.usersModel.createNewUser({ ...rest, password: hashedPassword });
        // Após a criação bem-sucedida do usuário, faça o login automaticamente
        const loginData = { email: data.email, password: data.password };
        const loginResponse = await this.login(loginData);
        if (loginResponse.status === 'SUCCESS') {
            // Se o login for bem-sucedido, retorne o token gerado
            return loginResponse;
        }
        else {
            // Se houver um problema no login, trate o erro adequadamente
            return { status: 'ERROR', data: { message: 'Failed to automatically log in after user creation' } };
        }
    }
}
exports.default = UsersService;
//# sourceMappingURL=UsersService.js.map
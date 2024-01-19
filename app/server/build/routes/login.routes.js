"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersControllers_1 = __importDefault(require("../controllers/UsersControllers"));
const usersControllers = new UsersControllers_1.default();
const router = (0, express_1.Router)();
router.post('/', (req, res) => usersControllers.login(req, res));
exports.default = router;
//# sourceMappingURL=login.routes.js.map
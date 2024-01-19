"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categories_routes_1 = __importDefault(require("./categories.routes"));
const products_routes_1 = __importDefault(require("./products.routes"));
const login_routes_1 = __importDefault(require("./login.routes"));
const router = (0, express_1.Router)();
router.use('/categories', categories_routes_1.default);
router.use('/products', products_routes_1.default);
router.use('/', login_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map
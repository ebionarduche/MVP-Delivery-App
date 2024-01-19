"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductsTypeControllers_1 = __importDefault(require("../controllers/ProductsTypeControllers"));
const productTypeController = new ProductsTypeControllers_1.default();
const router = (0, express_1.Router)();
router.get('/', (req, res) => productTypeController.getAll(req, res));
exports.default = router;
//# sourceMappingURL=productsType.routes.js.map
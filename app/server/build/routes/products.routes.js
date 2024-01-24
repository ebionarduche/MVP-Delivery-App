"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductsControllers_1 = __importDefault(require("../controllers/ProductsControllers"));
const productsController = new ProductsControllers_1.default();
const router = (0, express_1.Router)();
router.get('/', (req, res) => productsController.getAll(req, res));
router.post('/restaurant/type', (req, res) => productsController.findByProductType(req, res));
exports.default = router;
//# sourceMappingURL=products.routes.js.map
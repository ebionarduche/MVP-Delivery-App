"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CategoriesControllers_1 = __importDefault(require("../controllers/CategoriesControllers"));
const categoriesController = new CategoriesControllers_1.default();
const router = (0, express_1.Router)();
router.get('/', (req, res) => categoriesController.getAll(req, res));
exports.default = router;
//# sourceMappingURL=categories.routes.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RestaurantsControllers_1 = __importDefault(require("../controllers/RestaurantsControllers"));
const restaurantsController = new RestaurantsControllers_1.default();
const router = (0, express_1.Router)();
router.get('/', (req, res) => restaurantsController.getAll(req, res));
router.get('/:id', (req, res) => restaurantsController.findById(req, res));
router.get('/search', (req, res) => restaurantsController.findByQuery(req, res));
router.get('/category/:id', (req, res) => restaurantsController.findByCategoryId(req, res));
exports.default = router;
//# sourceMappingURL=restaurants.routes.js.map
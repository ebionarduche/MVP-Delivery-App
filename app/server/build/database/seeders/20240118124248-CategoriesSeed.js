"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('categories', [
            {
                category: 'Lanche',
            },
            {
                category: 'Pizza',
            },
            {
                category: 'Restaurante',
            },
            {
                category: 'Sorveteria',
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('categories', {});
    },
};
//# sourceMappingURL=20240118124248-CategoriesSeed.js.map
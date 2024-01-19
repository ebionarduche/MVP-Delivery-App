"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('products', [
            {
                name: 'Hambúrguer',
                restaurantId: 1,
                typeId: 1,
                description: 'Pão, carne, queijo e bacon.',
                price: 21.50,
                illustration: 'link-imagem-logo-produto'
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('products', {});
    },
};
//# sourceMappingURL=20240118170319-ProductSeed.js.map
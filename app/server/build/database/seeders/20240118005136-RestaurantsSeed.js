"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('restaurants', [
            {
                storeName: 'NashVille',
                category: 'Lanches',
                description: 'Melhor lanche da cidade',
                address: 'Rua dos burros Número 02',
                phone: '(24) 84362-4544',
                logo: 'link-imagem-logo-perfil'
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('restaurants', {});
    },
};
//# sourceMappingURL=20240118005136-RestaurantsSeed.js.map
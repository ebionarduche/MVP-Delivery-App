"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('restaurants', [
            {
                restaurantName: 'NashVille',
                categoryId: 1,
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
//# sourceMappingURL=20240118205136-RestaurantsSeed.js.map
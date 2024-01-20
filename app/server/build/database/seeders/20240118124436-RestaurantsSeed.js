"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('restaurants', [
            {
                restaurant_name: 'NashVille',
                category_id: 1,
                resume: 'Melhor lanche da cidade',
                address: 'Rua dos burros Número 02',
                phone: '(24) 84362-4544',
                logo: 'link-imagem-logo-perfil'
            },
            {
                restaurant_name: 'Pizza Place',
                category_id: 2,
                resume: 'Pizzas deliciosas para todos os gostos',
                address: 'Avenida das Pizzas Número 123',
                phone: '(24) 555-1234',
                logo: 'link-imagem-logo-pizza',
            },
            {
                restaurant_name: 'Sorveteria Delícia',
                category_id: 4,
                resume: 'Variedade de sorvetes deliciosos',
                address: 'Avenida dos Sorvetes Número 789',
                phone: '(24) 999-4567',
                logo: 'link-imagem-logo-sorveteria',
            },
            {
                restaurant_name: 'Bistrô Encantado',
                category_id: 3,
                resume: 'Culinária requintada em um ambiente encantador',
                address: 'Rua das Delícias Número 543',
                phone: '(24) 777-8888',
                logo: 'link-imagem-logo-bistro',
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('restaurants', {});
    },
};
//# sourceMappingURL=20240118124436-RestaurantsSeed.js.map
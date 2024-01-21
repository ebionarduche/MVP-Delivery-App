"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('categories', [
            {
                category: 'Lanches',
                image: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/categories-images/lanches.avif'
            },
            {
                category: 'Pizzas',
                image: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/categories-images/pizzas.avif'
            },
            {
                category: 'Restaurantes',
                image: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/categories-images/restaurante.avif'
            },
            {
                category: 'Sorveterias',
                image: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/categories-images/sorvetes.avif'
            },
            {
                category: 'Padarias',
                image: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/categories-images/padarias.avif'
            },
            {
                category: 'Marmitas',
                image: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/categories-images/marmita.avif'
            },
            {
                category: 'Saudáveis',
                image: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/categories-images/saudaveis.avif'
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('categories', {});
    },
};
//# sourceMappingURL=20240118124248-CategoriesSeed.js.map
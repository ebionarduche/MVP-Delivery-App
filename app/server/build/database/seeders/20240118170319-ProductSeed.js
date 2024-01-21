"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('products', [
            {
                product_name: 'Hambúrguer Clássico',
                restaurant_id: 1,
                type_id: 1,
                description: 'Pão, carne, queijo e bacon.',
                price: 21.50,
                illustration: 'link-imagem-logo-produto'
            },
            {
                product_name: 'Hambúrguer Vegano',
                restaurant_id: 1,
                type_id: 1,
                description: 'Pão integral, carne de soja, tomate e alface.',
                price: 23.50,
                illustration: 'link-imagem-hamburguer-vegano'
            },
            {
                product_name: 'Hambúrguer Especial BBQ',
                restaurant_id: 1,
                type_id: 1,
                description: 'Pão, carne, queijo, bacon e molho barbecue.',
                price: 25.99,
                illustration: 'link-imagem-hamburguer-bbq'
            },
            {
                product_name: 'Hambúrguer de Frango Grelhado',
                restaurant_id: 1,
                type_id: 1,
                description: 'Pão, frango grelhado, alface e tomate.',
                price: 22.50,
                illustration: 'link-imagem-hamburguer-frango'
            },
            {
                product_name: 'Água Mineral',
                restaurant_id: 1,
                type_id: 2,
                description: 'Água mineral sem gás.',
                price: 3.50,
                illustration: 'link-imagem-agua-mineral'
            },
            {
                product_name: 'Refrigerante',
                restaurant_id: 1,
                type_id: 2,
                description: 'Lata de refrigerante gelado.',
                price: 4.99,
                illustration: 'link-imagem-refrigerante-cola'
            },
            {
                product_name: 'Suco de Laranja Natural',
                restaurant_id: 1,
                type_id: 2,
                description: 'Suco de laranja natural.',
                price: 6.50,
                illustration: 'link-imagem-suco-laranja'
            },
            {
                product_name: 'Chá Gelado de Pêssego',
                restaurant_id: 1,
                type_id: 2,
                description: 'Copo de chá gelado de pêssego.',
                price: 5.75,
                illustration: 'link-imagem-cha-pessego'
            }
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('products', {});
    },
};
//# sourceMappingURL=20240118170319-ProductSeed.js.map
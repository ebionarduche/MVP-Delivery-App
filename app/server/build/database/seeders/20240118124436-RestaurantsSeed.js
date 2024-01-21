"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('restaurants', [
            {
                restaurant_name: 'NashVille',
                category_id: 1,
                resume: 'Melhor lanche da cidade',
                address: 'Rua dos Burgers Número 02',
                phone: '(24) 84362-4544',
                logo: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-perfil/nashville-perfil.png',
                wallpaper: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-wallpaper/nashville-wallpaper.jpg'
            },
            {
                restaurant_name: 'Pizza Place',
                category_id: 2,
                resume: 'Pizzas deliciosas para todos os gostos',
                address: 'Avenida das Pizzas Número 123',
                phone: '(24) 555-1234',
                logo: 'link-imagem-logo-pizza',
                wallpaper: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-wallpaper/pizza-place-wallpaper.jpg'
            },
            {
                restaurant_name: 'Sorveteria Delícia',
                category_id: 4,
                resume: 'Variedade de sorvetes deliciosos',
                address: 'Avenida dos Sorvetes Número 789',
                phone: '(24) 999-4567',
                logo: 'link-imagem-logo-sorveteria',
                wallpaper: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-wallpaper/soverteria-delicia-wallpaper.jpg'
            },
            {
                restaurant_name: 'Bistrô Encantado',
                category_id: 3,
                resume: 'Culinária em um ambiente encantador',
                address: 'Rua das Delícias Número 543',
                phone: '(24) 777-8888',
                logo: 'link-imagem-logo-bistro',
                wallpaper: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-wallpaper/bristo-encantado.jpg'
            },
            {
                restaurant_name: 'Sushi Palace',
                category_id: 3,
                resume: 'Deliciosos pratos de sushi',
                address: 'Rua do Sushi 789',
                phone: '(24) 111-2222',
                logo: 'link-imagem-logo-sushi',
                wallpaper: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-wallpaper/sushi-palace.jpg'
            },
            {
                restaurant_name: 'Restaurante Italiano',
                category_id: 3,
                resume: 'Autêntica culinária italiana',
                address: 'Via Italia 123',
                phone: '(24) 456-7890',
                logo: 'link-imagem-logo-italiano',
                wallpaper: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-wallpaper/restaurante-italiano-wallpaper.jpg'
            },
            {
                restaurant_name: 'Burger Shack',
                category_id: 1,
                resume: 'Saborosos hambúrgueres artesanais',
                address: 'Avenida dos Burgers 456',
                phone: '(24) 987-6543',
                logo: 'link-imagem-logo-burger',
                wallpaper: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-wallpaper/burguer-shack.jpg'
            },
            {
                restaurant_name: 'Veggie Haven',
                category_id: 1,
                resume: 'Opções saudáveis e deliciosas',
                address: 'Rua das Verduras 567',
                phone: '(24) 567-8901',
                logo: 'link-imagem-logo-veggie',
                wallpaper: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-wallpaper/veggie-haven.jpg'
            }
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('restaurants', {});
    },
};
//# sourceMappingURL=20240118124436-RestaurantsSeed.js.map
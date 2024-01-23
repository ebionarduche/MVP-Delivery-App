import { QueryInterface } from 'sequelize';

export default {
	up: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkInsert('restaurants',
			[
				{
					restaurant_name: 'NashVille',
					category_id: 1,
					resume: 'Melhor lanche da cidade',
					address: 'Rua dos Burgers Número 02',
					phone: '(24) 84362-4544',
					logo: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-perfil/logo-Nashv.png',
					wallpaper: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-wallpaper/nashville-wallpaper.jpg'
				},
				{
					restaurant_name: 'Pizza Place',
					category_id: 2,
					resume: 'Pizzas deliciosas para todos os gostos',
					address: 'Avenida das Pizzas Número 123',
					phone: '(24) 555-1234',
					logo: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-perfil/Pizza-Place.png',
					wallpaper: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-wallpaper/pizza-place-wallpaper.jpg'
				},
				{
					restaurant_name: 'Sorveteria Delícia',
					category_id: 4, 
					resume: 'Variedade de sorvetes deliciosos',
					address: 'Avenida dos Sorvetes Número 789',
					phone: '(24) 999-4567',
					logo: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-perfil/logo-sorveteria.png',
					wallpaper: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-wallpaper/soverteria-delicia-wallpaper.jpg'
				},
				{
					restaurant_name: 'Bistrô Encantado',
					category_id: 3, 
					resume: 'Culinária em um ambiente encantador',
					address: 'Rua das Delícias Número 543',
					phone: '(24) 777-8888',
					logo: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-perfil/logo-bistro.png',
					wallpaper: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-wallpaper/bristo-encantado.jpg'
				},
				{
					restaurant_name: 'Sushi Palace',
					category_id: 3,
					resume: 'Deliciosos pratos de sushi',
					address: 'Rua do Sushi 789',
					phone: '(24) 111-2222',
					logo: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-perfil/logo-sushi.png',
					wallpaper: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-wallpaper/sushi-palace.jpg'
				},
				{
					restaurant_name: 'Restaurante Italiano',
					category_id: 3,
					resume: 'Autêntica culinária italiana',
					address: 'Via Italia 123',
					phone: '(24) 456-7890',
					logo: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-perfil/logo-giardino.png',
					wallpaper: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-wallpaper/restaurante-italiano-wallpaper.jpg'
				},
				{
					restaurant_name: 'Burger Shack',
					category_id: 1,
					resume: 'Saborosos hambúrgueres artesanais',
					address: 'Avenida dos Burgers 456',
					phone: '(24) 987-6543',
					logo: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-perfil/Logo-burguer-shack.png',
					wallpaper: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-wallpaper/burguer-shack.jpg'
				},
				{
					restaurant_name: 'Veggie Haven',
					category_id: 1,
					resume: 'Opções saudáveis e deliciosas',
					address: 'Rua das Verduras 567',
					phone: '(24) 567-8901',
					logo: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-perfil/logo-veggie.png',
					wallpaper: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-wallpaper/veggie-haven-wallpaper.jpg'
				},
				{
					restaurant_name: 'Padaria Pão Quente',
					category_id: 5,
					resume: 'Deliciosos pães e doces fresquinhos',
					address: 'Av. das Baguetes, 123',
					phone: '(24) 98765-4321',
					logo: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-perfil/logo-padaria.png',
					wallpaper: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-wallpaper/marmitaria-wallpaper.png'
				},
				{
					restaurant_name: 'Marmitaria Sabor Caseiro',
					category_id: 6,
					resume: 'Refeições caseiras e saborosas',
					address: 'Rua das Marmitas, 456',
					phone: '(22) 87654-3210',
					logo: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-perfil/logo-marmita.png',
					wallpaper: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/restaurant-wallpaper/padaria-pao-quente.jpg'
				}
			],
			{},
		);
	},

	down: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkDelete('restaurants', {});
	},
};

import { QueryInterface } from 'sequelize';

export default {
	up: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkInsert('restaurants',
			[
				{
					restaurant_name: 'NashVille',
					category_id: 1,
					description: 'Melhor lanche da cidade',
					address: 'Rua dos burros Número 02',
					phone: '(24) 84362-4544',
					logo: 'link-imagem-logo-perfil'
				},
				{
					restaurant_name: 'Pizza Place',
					category_id: 2,
					description: 'Pizzas deliciosas para todos os gostos',
					address: 'Avenida das Pizzas Número 123',
					phone: '(24) 555-1234',
					logo: 'link-imagem-logo-pizza',
				},
				{
					restaurant_name: 'Sorveteria Delícia',
					category_id: 4, 
					description: 'Variedade de sorvetes deliciosos',
					address: 'Avenida dos Sorvetes Número 789',
					phone: '(24) 999-4567',
					logo: 'link-imagem-logo-sorveteria',
				},
				{
					restaurant_name: 'Bistrô Encantado',
					category_id: 3, 
					description: 'Culinária requintada em um ambiente encantador',
					address: 'Rua das Delícias Número 543',
					phone: '(24) 777-8888',
					logo: 'link-imagem-logo-bistro',
				},
			],
			{},
		);
	},

	down: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkDelete('restaurants', {});
	},
};

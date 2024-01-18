import { QueryInterface } from 'sequelize';

export default {
	up: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkInsert('restaurants',
			[
				{
					restaurantName: 'NashVille',
					categoryId: 1,
					description: 'Melhor lanche da cidade',
					address: 'Rua dos burros Número 02',
					phone: '(24) 84362-4544',
					logo: 'link-imagem-logo-perfil'
				},
			],
			{},
		);
	},

	down: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkDelete('restaurants', {});
	},
};

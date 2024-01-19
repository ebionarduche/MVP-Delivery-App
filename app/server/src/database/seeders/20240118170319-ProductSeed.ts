import { QueryInterface } from 'sequelize';

export default {
	up: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkInsert('products',
			[
				{
					product_name: 'Hambúrguer',
					restaurant_id: 1,
					type_id: 1,
					description: 'Pão, carne, queijo e bacon.',
					price: 21.50,
					illustration: 'link-imagem-logo-produto'
				},
			],
			{},
		);
	},

	down: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkDelete('products', {});
	},
};


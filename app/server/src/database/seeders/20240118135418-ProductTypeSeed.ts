import { QueryInterface } from 'sequelize';

export default {
	up: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkInsert('product_types',
			[
				{
					type: 'Refeições',
				}, 
				{
					type: 'Bebidas',
				},
			],
			{},
		);
	},

	down: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkDelete('product_types', {});
	},
};

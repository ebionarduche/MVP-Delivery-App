import { QueryInterface } from 'sequelize';

export default {
	up: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkInsert('productType',
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
		await queryInterface.bulkDelete('productType', {});
	},
};

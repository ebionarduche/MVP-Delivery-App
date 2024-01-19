import { QueryInterface } from 'sequelize';

export default {
	up: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkInsert('users',
			[
				{
					user_name: 'Fred Marques',
					email: 'fred@graodireto.com.br',
					password: '$2a$10$kUkWlXxkkBZfhCmCg.h3w.bAVv5z46n38QZxBAoP72etGBNJkZB36',
					address: 'Uberaba, Minas Gerais',
					phone: '(34) 54288-4456'
				},
			],
			{},
		);
	},

	down: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkDelete('users', {});
	},
};

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
				{
					user_name: 'Ebio Narduche',
					email: 'ebio@graodireto.com.br',
					password: '$2a$10$kUkWlXxkkBZfhCmCg.h3w.bAVv5z46n38QZxBAoP72etGBNJkZB36',
					address: 'Uberaba, Minas Gerais',
					phone: '(16) 73556-0800'
				},
			],
			{},
		);
	},

	down: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkDelete('users', {});
	},
};

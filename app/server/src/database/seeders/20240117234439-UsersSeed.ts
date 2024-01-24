import { QueryInterface } from 'sequelize';

export default {
	up: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkInsert('users',
			[
				{
					user_name: 'Fred Marques',
					email: 'fred@graodireto.com.br',
					password: '$2a$10$kUkWlXxkkBZfhCmCg.h3w.bAVv5z46n38QZxBAoP72etGBNJkZB36',
					//123Fred
					address: 'Uberaba, Minas Gerais',
					phone: '(34) 54288-4456'
				},
				{
					user_name: 'Ebio Narduche',
					email: 'ebio@graodireto.com.br',
					password: '$2a$08$FvIMuYrJBDGVNMvJhlwvneezmkt2OqPkgXjKEnevqlADLzypJ8lja',
					//123Ebio
					address: 'Uberaba, Minas Gerais',
					phone: '(24) 98152-9446'
				},
				{
					user_name: 'Gabriel Kaneko',
					email: 'kaneko@graodireto.com.br',
					password: '$2a$08$7muvoya5l48YlXdXymL4Heq6nI5YJ1dMD4A4FG2kfsobv6jmIMtO2',
					//123Kaneko
					address: 'Uberaba, Minas Gerais',
					phone: '(34) 89465-0548'
				},
				{
					user_name: 'Anieli Spirandeli',
					email: 'anieli@graodireto.com.br',
					password: '$2a$08$sVCFgi1pPYK399VDQdOpvOmT7DYidMl97dsIOqRf7nJRt9GzBuURq',
					//123Anieli
					address: 'Uberaba, Minas Gerais',
					phone: '(34) 56465-5440'
				},
				{
					user_name: 'Helio Hachimine',
					email: 'helio@graodireto.com.br',
					password: '$2a$08$ObQRkf..JMrwRjtCME3wneebg7wJKeZusrMAiqhLyZOQ65hiJQvUS',
					//123Helio
					address: 'Uberaba, Minas Gerais',
					phone: '(34) 54165-5440'
				},
			],
			{},
		);
	},

	down: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkDelete('users', {});
	},
};


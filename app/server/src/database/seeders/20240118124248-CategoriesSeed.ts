import { QueryInterface } from 'sequelize';

export default {
	up: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkInsert('categories',
			[
				{
					category: 'Lanches',
					image: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/categories/lanches.avif'
				}, 
				{
					category: 'Pizzas',
					image: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/categories/pizzas.avif'
				},
				{
					category: 'Restaurantes',
					image: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/categories/restaurante.avif'
				},
				{
					category: 'Sorveterias',
					image: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/categories/sorvetes.avif'
				},
				{
					category: 'Padarias',
					image: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/categories/padarias.avif'
				},
				{
					category: 'Marmitas',
					image: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/categories/marmita.avif'
				},
				
				{
					category: 'Saudáveis',
					image: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/categories/saudaveis.avif'
				},
        
			],
			{},
		);
	},

	down: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkDelete('categories', {});
	},
};

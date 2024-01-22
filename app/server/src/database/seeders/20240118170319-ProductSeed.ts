import { QueryInterface } from 'sequelize';

export default {
	up: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkInsert('products',
			[
				{
					product_name: 'Hambúrguer Clássico',
					restaurant_id: 1,
					type_id: 1,
					description: 'Pão, carne, queijo e bacon.',
					price: 21.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/hamburguer-classico.jpg'
				},
				{
					product_name: 'Hambúrguer Vegano',
					restaurant_id: 1,
					type_id: 1,
					description: 'Pão integral, carne de soja, tomate e alface.',
					price: 23.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/hamburguer-vegano.jpg'
				},
				{
					product_name: 'Hambúrguer Especial BBQ',
					restaurant_id: 1,
					type_id: 1,
					description: 'Pão, carne, queijo, bacon e molho barbecue.',
					price: 25.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/hamburguer-bbq.jpg'
				},
				{
					product_name: 'Hambúrguer de Frango Grelhado',
					restaurant_id: 1,
					type_id: 1,
					description: 'Pão, frango grelhado, alface e tomate.',
					price: 22.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/hamburguer-frango.jpg'
				},
				{
					product_name: 'Água Mineral',
					restaurant_id: 1,
					type_id: 2,
					description: 'Água mineral sem gás.',
					price: 3.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/agua-mineral.jpg'
				},
				{
					product_name: 'Refrigerante',
					restaurant_id: 1,
					type_id: 2,
					description: 'Lata de refrigerante gelado.',
					price: 4.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/refrigerante.png'
				},
				{
					product_name: 'Suco de Laranja Natural',
					restaurant_id: 1,
					type_id: 2,
					description: 'Suco de laranja natural.',
					price: 6.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/suco-laranja.jpg'
				},
				{
					product_name: 'Chá Gelado de Pêssego',
					restaurant_id: 1,
					type_id: 2,
					description: 'Copo de chá gelado de pêssego.',
					price: 5.75,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/cha-gelado.avif'
				}
			],
			{},
		);
	},

	down: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkDelete('products', {});
	},
};


import { QueryInterface } from 'sequelize';

export default {
	up: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkInsert('products',
			[
				{
					product_name: 'Clássico com Queijo',
					restaurant_id: 1,
					type_id: 1,
					description: 'Um irresistível com pão, carne suculenta, queijo e bacon.',
					price: 21.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/NashVille/hamburguer-classico.jpg'
				},
				{
					product_name: 'Vegan Burguer',
					restaurant_id: 1,
					type_id: 1,
					description: 'Uma opção saudável com pão, carne de soja, tomate e alface.',
					price: 23.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/NashVille/hamburguer-vegano.jpg'
				},
				{
					product_name: 'Especial BBQ',
					restaurant_id: 1,
					type_id: 1,
					description: 'O queridinho pão brioche, carne, queijo, bacon e barbecue.',
					price: 25.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/NashVille/hamburguer-bbq.jpg'
				},
				{
					product_name: 'Hambúrguer de Frango Grelhado',
					restaurant_id: 1,
					type_id: 1,
					description: 'O equilíbrio perfeito entre pão, frango grelhado, alface e tomate.',
					price: 22.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/NashVille/hamburguer-frango.jpg'
				},
				{
					product_name: 'Cheddar Explosion',
					restaurant_id: 1,
					type_id: 1,
					description: 'Cheddar cremoso, pão macio, carne suculenta e tempero especial.',
					price: 22.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/NashVille/cheddar.png'
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
				},
				{
					product_name: 'Pizza Marguerita',
					restaurant_id: 2,
					type_id: 1,
					description: 'Molho de tomate, mussarela, tomates e manjericão fresco.',
					price: 41.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Pizza-Place/receita_pizza_marguerita.png'
				},
				{
					product_name: 'Pizza Pepperoni',
					restaurant_id: 2,
					type_id: 1,
					description: 'Molho de tomate, mussarela e generosas fatias de pepperoni.',
					price: 45.80,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Pizza-Place/pepperoni.jpg'
				},
				{
					product_name: 'Pizza Quatro Queijos',
					restaurant_id: 2,
					type_id: 1,
					description: 'Uma mistura irresistível de mussarela, parmesão, provole e gorgonzola.',
					price: 51.10,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Pizza-Place/quatro-queijos-1308355753-612x612.jpg'
				},
				{
					product_name: 'Pizza Vegetariana',
					restaurant_id: 2,
					type_id: 1,
					description: 'Repleta de vegetais frescos e saborosos.',
					price: 39.90,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Pizza-Place/pizza-vegetariana.png'
				},
				{
					product_name: 'Pizza Frango com Catupiry',
					restaurant_id: 2,
					type_id: 1,
					description: 'Deliciosa combinação de molho de tomate, queijo, frango e catupiry.',
					price: 43.90,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Pizza-Place/14012642_Pizzaria_frangojpg.jpg'
				},
				{
					product_name: 'Água Mineral',
					restaurant_id: 2,
					type_id: 2,
					description: 'Água mineral sem gás.',
					price: 3.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/agua-mineral.jpg'
				},
				{
					product_name: 'Refrigerante',
					restaurant_id: 2,
					type_id: 2,
					description: 'Lata de refrigerante gelado.',
					price: 4.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/refrigerante.png'
				},
				{
					product_name: 'Suco de Laranja Natural',
					restaurant_id: 2,
					type_id: 2,
					description: 'Suco de laranja natural.',
					price: 6.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/suco-laranja.jpg'
				},
				{
					product_name: 'Chá Gelado de Pêssego',
					restaurant_id: 2,
					type_id: 2,
					description: 'Copo de chá gelado de pêssego.',
					price: 5.75,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/cha-gelado.avif'
				},
				{
					product_name: 'Sorvete de Baunilha',
					restaurant_id: 3,
					type_id: 1,
					description: 'A cremosidade da baunilha em cada colherada.',
					price: 5.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Sorveteria-Del%C3%ADcia/baunilha.jpg'
				},
				{
					product_name: 'Sorvete de Limão',
					restaurant_id: 3,
					type_id: 1,
					description: 'A acidez do limão em um sorvete refrescante.',
					price: 6.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Sorveteria-Del%C3%ADcia/limao.png'
				},
				{
					product_name: 'Sorvete de Manga',
					restaurant_id: 3,
					type_id: 1,
					description: 'A doçura tropical da manga em cada colherada.',
					price: 7.25,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Sorveteria-Del%C3%ADcia/manga.jpg'
				},
				{
					product_name: 'Sorvete de Pistache',
					restaurant_id: 3,
					type_id: 1,
					description: 'A riqueza e sabor único do pistache.',
					price: 7.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Sorveteria-Del%C3%ADcia/Sorvete-de-pistache-1-1200x738.png'
				},
				{
					product_name: 'Sorvete de Morango',
					restaurant_id: 3,
					type_id: 1,
					description: 'A explosão de sabor do morango em cada mordida.',
					price: 6.75,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Sorveteria-Del%C3%ADcia/Sorvete-de-Morango-Vegano.png'
				},
				{
					product_name: 'Água Mineral',
					restaurant_id: 3,
					type_id: 2,
					description: 'Água mineral sem gás.',
					price: 3.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/agua-mineral.jpg'
				},
				{
					product_name: 'Refrigerante',
					restaurant_id: 3,
					type_id: 2,
					description: 'Lata de refrigerante gelado.',
					price: 4.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/refrigerante.png'
				},
				{
					product_name: 'Suco de Laranja Natural',
					restaurant_id: 3,
					type_id: 2,
					description: 'Suco de laranja natural.',
					price: 6.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/suco-laranja.jpg'
				},
				{
					product_name: 'Chá Gelado de Pêssego',
					restaurant_id: 3,
					type_id: 2,
					description: 'Copo de chá gelado de pêssego.',
					price: 5.75,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/cha-gelado.avif'
				},
				{
					product_name: 'Bistrô Especial: Steak au Poivre',
					restaurant_id: 4,
					type_id: 1,
					description: 'Bife suculento com molho de pimenta preta.',
					price: 32.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/bistro-encantado/Steak_Au_Poivre.jpg'
				},
				{
					product_name: 'Frango Marsala de Bistrô',
					restaurant_id: 4,
					type_id: 1,
					description: 'Peitos de frango em um molho Marsala irresistível.',
					price: 28.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/bistro-encantado/frango-marsala.jpg'
				},
				{
					product_name: 'Risoto de Cogumelos Selvagens',
					restaurant_id: 4,
					type_id: 1,
					description: 'Arroz cremoso com cogumelos selvagens.',
					price: 24.75,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/bistro-encantado/risoto-de-cogumelos-selvagens-em-frigideira-de-ferro-fundido-criado-com-ai-generativa_419341-45325.jpg'
				},
				{
					product_name: 'Cassoulet Francês',
					restaurant_id: 4,
					type_id: 1,
					description: 'Prato clássico com feijão, carne de porco e linguiça.',
					price: 30.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/bistro-encantado/Conheca-o-cassoulet-a-feijoada-francesa0309549200202108051550.webp'
				},
				{
					product_name: 'Tarte Tatin de Maçã',
					restaurant_id: 4,
					type_id: 1,
					description: 'Sobremesa francesa com maçãs caramelizadas.',
					price: 15.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/bistro-encantado/tarte-tatin-maca.jpg'
				},
				{
					product_name: 'Água Mineral',
					restaurant_id: 4,
					type_id: 2,
					description: 'Água mineral sem gás.',
					price: 3.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/agua-mineral.jpg'
				},
				{
					product_name: 'Refrigerante',
					restaurant_id: 4,
					type_id: 2,
					description: 'Lata de refrigerante gelado.',
					price: 4.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/refrigerante.png'
				},
				{
					product_name: 'Suco de Laranja Natural',
					restaurant_id: 4,
					type_id: 2,
					description: 'Suco de laranja natural.',
					price: 6.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/suco-laranja.jpg'
				},
				{
					product_name: 'Chá Gelado de Pêssego',
					restaurant_id: 4,
					type_id: 2,
					description: 'Copo de chá gelado de pêssego.',
					price: 5.75,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/cha-gelado.avif'
				},
				{
					product_name: 'Sushi Clássico',
					restaurant_id: 5,
					type_id: 1,
					description: 'Uma seleção de sushis frescos e deliciosos.',
					price: 24.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Sushi-Palace/sushi-png.webp'
				},
				{
					product_name: 'Temaki de Salmão',
					restaurant_id: 5,
					type_id: 1,
					description: 'Temaki recheado com salmão fresco e cream cheese.',
					price: 18.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Sushi-Palace/temaki-dalmao.jpg'
				},
				{
					product_name: 'Yakitori de Frango',
					restaurant_id: 5,
					type_id: 1,
					description: 'Espetinhos de frango grelhados com molho teriyaki.',
					price: 16.75,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Sushi-Palace/yakitori-frango.jpg'
				},
				{
					product_name: 'Uramaki de Abacate',
					restaurant_id: 5,
					type_id: 1,
					description: 'Saboroso uramaki recheado com abacate fresco.',
					price: 22.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Sushi-Palace/uramaki.jpg'
				},
				{
					product_name: 'Missoshiro Quente',
					restaurant_id: 5,
					type_id: 1,
					description: 'Sopa tradicional japonesa de missô.',
					price: 12.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Sushi-Palace/missoshiri-quente.png'
				},
				{
					product_name: 'Água Mineral',
					restaurant_id: 5,
					type_id: 2,
					description: 'Água mineral sem gás.',
					price: 3.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/agua-mineral.jpg'
				},
				{
					product_name: 'Refrigerante',
					restaurant_id: 5,
					type_id: 2,
					description: 'Lata de refrigerante gelado.',
					price: 4.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/refrigerante.png'
				},
				{
					product_name: 'Suco de Laranja Natural',
					restaurant_id: 5,
					type_id: 2,
					description: 'Suco de laranja natural.',
					price: 6.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/suco-laranja.jpg'
				},
				{
					product_name: 'Chá Gelado de Pêssego',
					restaurant_id: 5,
					type_id: 2,
					description: 'Copo de chá gelado de pêssego.',
					price: 5.75,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/cha-gelado.avif'
				},
				{
					product_name: 'Ravioli de Espinafre e Ricota',
					restaurant_id: 6,
					type_id: 1,
					description: 'Ravioli recheado com espinafre fresco e ricota.',
					price: 20.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Giardino-Segreto/ravioli-de-ricota-e-espinafre-com-manteiga-e-salvia-1375322975650_v2_4x3.jpg'
				},
				{
					product_name: 'Ossobuco com Risoto de Açafrão',
					restaurant_id: 6,
					type_id: 1,
					description: 'Ossobuco cozido lentamente servido com risoto de açafrão.',
					price: 25.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Giardino-Segreto/Ossobuco-com-Risoto.png'
				},
				{
					product_name: 'Gnocchi à Bolonhesa',
					restaurant_id: 6,
					type_id: 1,
					description: 'Gnocchi de batata em um delicioso molho à bolonhesa.',
					price: 18.75,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Giardino-Segreto/o-verdadeiro-nhoque-a-bolonhesa.png'
				},
				{
					product_name: 'Polenta Cremosa com Funghi',
					restaurant_id: 6,
					type_id: 1,
					description: 'Polenta cremosa coberta com cogumelos funghi.',
					price: 21.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Giardino-Segreto/polenta-remosa.jpg'
				},
				{
					product_name: 'Carpaccio de Vitela',
					restaurant_id: 6,
					type_id: 1,
					description: 'Finas fatias de vitela marinadas com molho de mostarda.',
					price: 22.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Giardino-Segreto/carpaccio-de-vitela.jpg'
				},
				{
					product_name: 'Água Mineral',
					restaurant_id: 6,
					type_id: 2,
					description: 'Água mineral sem gás.',
					price: 3.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/agua-mineral.jpg'
				},
				{
					product_name: 'Refrigerante',
					restaurant_id: 6,
					type_id: 2,
					description: 'Lata de refrigerante gelado.',
					price: 4.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/refrigerante.png'
				},
				{
					product_name: 'Suco de Laranja Natural',
					restaurant_id: 6,
					type_id: 2,
					description: 'Suco de laranja natural.',
					price: 6.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/suco-laranja.jpg'
				},
				{
					product_name: 'Chá Gelado de Pêssego',
					restaurant_id: 6,
					type_id: 2,
					description: 'Copo de chá gelado de pêssego.',
					price: 5.75,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/cha-gelado.avif'
				},
				{
					product_name: 'Hambúrguer Artesanal Gourmet',
					restaurant_id: 7,
					type_id: 1,
					description: 'Pão artesanal, carne premium, queijo especial e bacon defumado.',
					price: 24.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Burger-Shack/hamburguer-artesanal-gourmet.jpeg'
				},
				{
					product_name: 'Hambúrguer com Abacate e Rúcula',
					restaurant_id: 7,
					type_id: 1,
					description: 'Pão integral, carne suculenta, abacate fresco e rúcula crocante.',
					price: 22.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Burger-Shack/grande-hamburguer-gourmet-com-abacate-e-rucula-107557055.png'
				},
				{
					product_name: 'Hambúrguer de Cordeiro ao Molho de Hortelã',
					restaurant_id: 7,
					type_id: 1,
					description: 'Pão de brioche, carne de cordeiro saborosa, molho de hortelã fresca.',
					price: 26.75,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Burger-Shack/hamburguer-cordeiro-molho-hortela.jpg'
				},
				{
					product_name: 'Hambúrguer Vegetariano de Quinoa',
					restaurant_id: 7,
					type_id: 1,
					description: 'Pão multigrãos, hambúrguer de quinoa, queijo vegano e vegetais frescos.',
					price: 20.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Burger-Shack/hamburguer-vegetariano-quinoa.jpg'
				},
				{
					product_name: 'Hambúrguer Picante de Frango Cajun',
					restaurant_id: 7,
					type_id: 1,
					description: 'Pão de pimenta, hambúrguer de frango cajun, queijo picante e molho especial.',
					price: 23.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Burger-Shack/hamburguer-picante-frango-cajun.png'
				},
				{
					product_name: 'Água Mineral',
					restaurant_id: 7,
					type_id: 2,
					description: 'Água mineral sem gás.',
					price: 3.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/agua-mineral.jpg'
				},
				{
					product_name: 'Refrigerante',
					restaurant_id: 7,
					type_id: 2,
					description: 'Lata de refrigerante gelado.',
					price: 4.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/refrigerante.png'
				},
				{
					product_name: 'Suco de Laranja Natural',
					restaurant_id: 7,
					type_id: 2,
					description: 'Suco de laranja natural.',
					price: 6.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/suco-laranja.jpg'
				},
				{
					product_name: 'Chá Gelado de Pêssego',
					restaurant_id: 7,
					type_id: 2,
					description: 'Copo de chá gelado de pêssego.',
					price: 5.75,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/cha-gelado.avif'
				},
				{
					product_name: 'Hambúrguer Vegano de Grão-de-Bico',
					restaurant_id: 8,
					type_id: 1,
					description: 'Pão integral, hambúrguer de grão-de-bico, queijo vegano e vegetais.',
					price: 24.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Veggie-Haven/hamburguer-vegano-gr%C3%A3o-de-bico.png'
				},
				{
					product_name: 'Tacos Veganos de Abacate',
					restaurant_id: 8,
					type_id: 1,
					description: 'Tortilhas de milho, abacate fresco, feijão e molho picante.',
					price: 22.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Veggie-Haven/tacos-vegetariano-abacate.jpg'
				},
				{
					product_name: 'Salada de Quinoa com Legumes',
					restaurant_id: 8,
					type_id: 1,
					description: 'Quinoa cozida, vegetais frescos, abobrinha e molho de limão.',
					price: 26.75,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Veggie-Haven/Salada-de-Quinoa-e-Legumes.png'
				},
				{
					product_name: 'Wrap Vegano de Falafel',
					restaurant_id: 8,
					type_id: 1,
					description: 'Wrap de trigo integral, falafel, homus e vegetais variados.',
					price: 20.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Veggie-Haven/wrap-vegano-de-falafel.jpg'
				},
				{
					product_name: 'Curry de Vegetais com Leite de Coco',
					restaurant_id: 8,
					type_id: 1,
					description: 'Mistura de legumes em um delicioso curry com leite de coco.',
					price: 23.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Veggie-Haven/curry-de-legumes.png'
				},
				{
					product_name: 'Água Mineral',
					restaurant_id: 8,
					type_id: 2,
					description: 'Água mineral sem gás.',
					price: 3.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/agua-mineral.jpg'
				},
				{
					product_name: 'Refrigerante',
					restaurant_id: 8,
					type_id: 2,
					description: 'Lata de refrigerante gelado.',
					price: 4.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/refrigerante.png'
				},
				{
					product_name: 'Suco de Laranja Natural',
					restaurant_id: 8,
					type_id: 2,
					description: 'Suco de laranja natural.',
					price: 6.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/suco-laranja.jpg'
				},
				{
					product_name: 'Chá Gelado de Pêssego',
					restaurant_id: 8,
					type_id: 2,
					description: 'Copo de chá gelado de pêssego.',
					price: 5.75,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/cha-gelado.avif'
				},
				{
					product_name: 'Croissant de Chocolate Belga',
					restaurant_id: 9,
					type_id: 1,
					description: 'Delicioso croissant recheado com chocolate belga derretido.',
					price: 6.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Padaria-P%C3%A3o-Quente/Croissant-de-Chocolate-Belga.jpg'
				},
				{
					product_name: 'Pão de Queijo Mineiro',
					restaurant_id: 9,
					type_id: 1,
					description: 'Tradicional pão de queijo mineiro, quentinho e irresistível.',
					price: 4.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Padaria-P%C3%A3o-Quente/P%C3%A3o-de-Queijo-Mineiro.png'
				},
				{
					product_name: 'Bolo de Cenoura com Cobertura de Chocolate',
					restaurant_id: 9,
					type_id: 1,
					description: 'Bolo de cenoura com generosa cobertura de chocolate.',
					price: 8.75,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Padaria-P%C3%A3o-Quente/cobertura_de_chocolate_com_leite_condensado_para_bolo_de_cenoura_8491_600.jpg'
				},
				{
					product_name: 'Sanduíche de Frango Defumado',
					restaurant_id: 9,
					type_id: 1,
					description: 'Sanduíche com frango defumado e molho especial.',
					price: 9.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Padaria-P%C3%A3o-Quente/Receita-de-sanduiche-frango.jpg'
				},
				{
					product_name: 'Empada de Camarão',
					restaurant_id: 9,
					type_id: 1,
					description: 'Empada recheada com suculentos camarões e temperos.',
					price: 7.25,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Padaria-P%C3%A3o-Quente/Empadinha-de-Camarao-Site.jpg'
				},
				{
					product_name: 'Água Mineral',
					restaurant_id: 9,
					type_id: 2,
					description: 'Água mineral sem gás.',
					price: 3.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/agua-mineral.jpg'
				},
				{
					product_name: 'Refrigerante',
					restaurant_id: 9,
					type_id: 2,
					description: 'Lata de refrigerante gelado.',
					price: 4.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/refrigerante.png'
				},
				{
					product_name: 'Suco de Laranja Natural',
					restaurant_id: 9,
					type_id: 2,
					description: 'Suco de laranja natural.',
					price: 6.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/suco-laranja.jpg'
				},
				{
					product_name: 'Chá Gelado de Pêssego',
					restaurant_id: 9,
					type_id: 2,
					description: 'Copo de chá gelado de pêssego.',
					price: 5.75,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/cha-gelado.avif'
				},
				{
					product_name: 'Marmita de Frango Grelhado com Legumes',
					restaurant_id: 10,
					type_id: 1,
					description: 'Marmita com peito de frango grelhado e mix de legumes.',
					price: 15.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Marmitaria-Sabor-Caseiro/marmita-frango-com-legumes.png'
				},
				{
					product_name: 'Marmita Fit de Quinoa e Vegetais',
					restaurant_id: 10,
					type_id: 1,
					description: 'Marmita saudável com quinoa, vegetais coloridos e molho.',
					price: 17.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Marmitaria-Sabor-Caseiro/marmita-quinoa.png'
				},
				{
					product_name: 'Marmita de Feijoada Completa',
					restaurant_id: 10,
					type_id: 1,
					description: 'Marmita tradicional com feijoada, arroz, couve e laranja.',
					price: 19.75,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Marmitaria-Sabor-Caseiro/feijoada.jpg'
				},
				{
					product_name: 'Marmita Vegana de Curry de Grão-de-Bico',
					restaurant_id: 10,
					type_id: 1,
					description: 'Opção vegana com grão-de-bico, arroz e legumes variados.',
					price: 16.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Marmitaria-Sabor-Caseiro/ThaiCurry-grao-bico-marmitas-congeladas-mestre-cuco.jpg'
				},
				{
					product_name: 'Marmita Fitness de Salmão Grelhado',
					restaurant_id: 10,
					type_id: 1,
					description: 'Marmita de salmão grelhado, batata-doce e brócolis.',
					price: 21.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/Marmitaria-Sabor-Caseiro/prato-de-salmao-com-quinua-e-vegetais-crus_181624-32050.png'
				},
				{
					product_name: 'Água Mineral',
					restaurant_id: 10,
					type_id: 2,
					description: 'Água mineral sem gás.',
					price: 3.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/agua-mineral.jpg'
				},
				{
					product_name: 'Refrigerante',
					restaurant_id: 10,
					type_id: 2,
					description: 'Lata de refrigerante gelado.',
					price: 4.99,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/refrigerante.png'
				},
				{
					product_name: 'Suco de Laranja Natural',
					restaurant_id: 10,
					type_id: 2,
					description: 'Suco de laranja natural.',
					price: 6.50,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/suco-laranja.jpg'
				},
				{
					product_name: 'Chá Gelado de Pêssego',
					restaurant_id: 10,
					type_id: 2,
					description: 'Copo de chá gelado de pêssego.',
					price: 5.75,
					illustration: 'https://raw.githubusercontent.com/ebionarduche/MVP-Delivery-App/main/app/server/src/database/images/products-images/cha-gelado.avif'
				},
			],
			{},
		);
	},

	down: async (queryInterface: QueryInterface) => {
		await queryInterface.bulkDelete('products', {});
	},
};


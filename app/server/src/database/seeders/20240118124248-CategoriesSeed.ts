import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('categories',
      [
        {
          category: 'Lanche',
        }, 
        {
          category: 'Pizza',
        },
        {
          category: 'Restaurante',
        },
        {
          category: 'Sorveteria',
        },
        
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('categories', {});
  },
};

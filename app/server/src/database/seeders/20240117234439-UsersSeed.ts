import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users',
      [
        {
          userName: 'Fred Marques',
          email: 'fred@graodireto.com.br',
          password: '123Fred',
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

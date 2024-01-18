import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users',
      [
        {
          userName: 'Ebio Narduche',
          email: 'ebionarduche77@gmail.com',
          password: '123456',
          address: 'Rua dos burros Número 01',
          phone: '(24) 54288-4456'
        },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
};

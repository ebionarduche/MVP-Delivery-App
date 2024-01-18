"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('users', [
            {
                userName: 'Ebio Narduche',
                email: 'ebionarduche77@gmail.com',
                password: '123456',
                address: 'Rua dos burros Número 01',
                phone: '(24) 54288-4456'
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('users', {});
    },
};
//# sourceMappingURL=20240117234439-UsersSeed.js.map
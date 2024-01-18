"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('users', [
            {
                userName: 'Fred Marques',
                email: 'fred@graodireto.com.br',
                password: '123Fred',
                address: 'Uberaba, Minas Gerais',
                phone: '(34) 54288-4456'
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('users', {});
    },
};
//# sourceMappingURL=20240117234439-UsersSeed.js.map
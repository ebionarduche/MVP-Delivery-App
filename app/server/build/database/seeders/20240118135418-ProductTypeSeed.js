"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('ProductType', [
            {
                type: 'Refeições',
            },
            {
                type: 'Bebidas',
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('ProductType', {});
    },
};
//# sourceMappingURL=20240118135418-ProductTypeSeed.js.map
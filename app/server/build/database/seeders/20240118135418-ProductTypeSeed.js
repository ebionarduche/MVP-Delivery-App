"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('productType', [
            {
                type: 'Refeições',
            },
            {
                type: 'Bebidas',
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('productType', {});
    },
};
//# sourceMappingURL=20240118135418-ProductTypeSeed.js.map
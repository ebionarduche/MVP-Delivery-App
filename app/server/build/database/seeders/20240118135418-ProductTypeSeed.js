"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('product_types', [
            {
                type: 'Refeições',
            },
            {
                type: 'Bebidas',
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('product_types', {});
    },
};
//# sourceMappingURL=20240118135418-ProductTypeSeed.js.map
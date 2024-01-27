"use strict";
(() => {
    const createProductToJson = (title, createAt, stock, size) => {
        return {
            title,
            createAt,
            stock,
            size,
        };
    };
    const producto1 = createProductToJson('Remera', new Date(), 20, 'L');
    console.log(producto1);
})();

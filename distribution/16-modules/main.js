"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
(0, product_service_1.addProduct)({
    title: 'Camisa',
    createAt: new Date(),
    stock: 10,
    size: 'M',
});
(0, product_service_1.addProduct)({
    title: 'Pantalon',
    createAt: new Date(),
    stock: 15,
});
console.log(product_service_1.products);
let stock = (0, product_service_1.calcStock)();
console.log(stock);

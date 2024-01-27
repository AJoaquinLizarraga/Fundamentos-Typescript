"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcStock = exports.addProduct = exports.products = void 0;
exports.products = [];
const addProduct = (data) => {
    exports.products.push(data);
};
exports.addProduct = addProduct;
const calcStock = () => {
    let total = 0;
    exports.products.map((item) => {
        total += item.stock;
    });
    // console.log(total);
    return total;
};
exports.calcStock = calcStock;

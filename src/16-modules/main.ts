import { addProduct, calcStock, products } from './product.service';

addProduct({
    title: 'Camisa',
    createAt: new Date(),
    stock: 10,
    size: 'M',
});

addProduct({
    title: 'Pantalon',
    createAt: new Date(),
    stock: 15,
});

console.log(products);
let stock = calcStock();
console.log(stock);

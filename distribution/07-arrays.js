"use strict";
(() => {
    const prices = [1, 2, 3, 3, 4, 8, 6, 'hola', true];
    prices.push(22);
    const mixed = [1, 2, 3, 'dfghdfhg', true]; // asi se tipa un array
    const numbers = [1, 2, 3, 3, 4, 8, 6];
    numbers.map((item) => item * 2); // funcionan todos los metodos de array
})();

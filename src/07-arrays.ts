(() => {
    const prices = [1, 2, 3, 3, 4, 8, 6, 'hola', true];

    prices.push(22);

    const mixed: (number | string | boolean)[] = [1, 2, 3, 'dfghdfhg', true]; // asi se tipa un array

    const numbers = [1, 2, 3, 3, 4, 8, 6];

    numbers.map((item) => item * 2); // funcionan todos los metodos de array
})();

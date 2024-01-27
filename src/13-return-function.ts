(() => {
    const calcTotal = (prices: number[]): number => {
        // el primer number define el tipo de dato del parametro, el segundo number define lo que la funcion debe retorna
        let total = 0;
        prices.forEach((item) => {
            total += item;
        });
        return total;
    };

    const rta = calcTotal([1, 2, 3, 4, 5, 6, 7]); // esta rta es un number porque la funcion devuelve un number

    const log = (): void => {
        console.log('Esto solo ejecuta la funcion pero no retorna nada');
    };

    console.log(rta);
    log();
})();

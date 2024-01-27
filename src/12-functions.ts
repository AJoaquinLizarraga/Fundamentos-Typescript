(() => {
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    const createProductToJson = (
        title: string,
        createAt: Date,
        stock: number,
        size: Sizes
    ) => {
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

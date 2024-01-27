(() => {
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    const person: object = {
        name: 'John',
        age: 30,
        email: 'abel@gmail.com',
    };
    const login = (person: { email: string; password: number }) => {
        console.log(person.email, person.password);
    };

    login({
        email: 'abel@gmail.com',
        password: 123456789,
    });

    const products: any[] = [];
    const addProduct = (data: {
        title: string;
        createAt: Date;
        stock: number;
        size?: Sizes; // el optionalchaining hace que el parametro sea opcional
    }) => {
        products.push(data);
    };

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
})();

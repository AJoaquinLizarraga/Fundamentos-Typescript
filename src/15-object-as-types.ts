(() => {
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    type Product = {
        title: string;
        createAt: Date;
        stock: number;
        size?: Sizes; // el optionalchaining hace que el parametro sea opcional
    };

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

    const products: Product[] = [];
    const addProduct = (data: Product) => {
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

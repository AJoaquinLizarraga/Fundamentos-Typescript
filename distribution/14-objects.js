"use strict";
(() => {
    const person = {
        name: 'John',
        age: 30,
        email: 'abel@gmail.com',
    };
    const login = (person) => {
        console.log(person.email, person.password);
    };
    login({
        email: 'abel@gmail.com',
        password: 123456789,
    });
    const products = [];
    const addProduct = (data) => {
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

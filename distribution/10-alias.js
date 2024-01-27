"use strict";
(() => {
    let userId;
    const greeting = (userId, sizes) => {
        // al if le falta como tratar el boolean
        if (typeof userId === 'string') {
            //se ejecuta algo
            // aqui acepta todos los metodos de string de manera automatica
            console.log(`Esto es un string toUpperCase: ${userId.toUpperCase()}`);
        }
        else {
            //se ejecuta otra cosa
            console.log(`Este es el numero: ${userId}`);
        }
    };
    let shirtSize;
    shirtSize = 'L';
    shirtSize = 'M';
    shirtSize = 'S';
    // shirtSize = 'xl' // este es otro tipo del creado, por lo tanto no anda, tiene que ser literal
    greeting(12345, 'S');
})();

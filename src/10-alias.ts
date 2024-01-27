(() => {
    /** ALIAS TYPES */
    type UserId = string | number | boolean; // este es un alias type
    let userId: UserId;

    const greeting = (userId: UserId, sizes: Sizes) => {
        // al if le falta como tratar el boolean
        if (typeof userId === 'string') {
            //se ejecuta algo
            // aqui acepta todos los metodos de string de manera automatica
            console.log(
                `Esto es un string toUpperCase: ${userId.toUpperCase()}`
            );
        } else {
            //se ejecuta otra cosa
            console.log(`Este es el numero: ${userId}`);
        }
    };

    // greeting('otrorandom');
    // greeting(123456.2521);

    /** LITERAL TYPES */

    type Sizes = 'S' | 'M' | 'L' | 'XL';
    let shirtSize: Sizes;

    shirtSize = 'L';
    shirtSize = 'M';
    shirtSize = 'S';
    // shirtSize = 'xl' // este es otro tipo del creado, por lo tanto no anda, tiene que ser literal

    greeting(12345, 'S');
})();

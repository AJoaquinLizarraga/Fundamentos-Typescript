(() => {
    let userId: string | number;
    userId = 'randomId';
    userId = 13142;

    const greeting = (text: string | number) => {
        if (typeof text === 'string') {
            //se ejecuta algo
            // aqui acepta todos los metodos de string de manera automatica
            console.log(`Esto es un string toUpperCase: ${text.toUpperCase()}`);
        } else {
            //se ejecuta otra cosa
            console.log(`Este es el numero: ${text.toFixed(2)}`);
        }
    };

    greeting('otrorandom');
    greeting(123456.2521);
    // greeting(null); // esto no anda
})();

(() => {
    let dymanicVar: any;
    dymanicVar = 123;
    dymanicVar = 'asdfasd';
    dymanicVar = {};
    dymanicVar = '';

    dymanicVar = 'Hola';
    const rta = dymanicVar as string; // esto es un cast para transformar un any para que se pueda tratar de manera especifica

    const rta2 = <number>dymanicVar; // este es otro tipo de cast, para que una variable sea forzadamente tratada como number
})();

(() => {
    //  let number: number
    type Name = string | null;
    let name: Name;

    let myNull: null = null;
    let myUndefined: undefined = undefined;

    let number: number | undefined = undefined;

    // const hi = (name: Name) => {
    //     let hello = 'Hola';
    //     if (name) {
    //         console.log((hello += `, ${name}!`));
    //     } else {
    //         console.log('Hello, anonymous person!');
    //     }
    // };

    // hi('Joaquin');

    // hi(null);
    const hiV2 = (name: Name) => {
        let hello = 'Hello, ';
        hello += name?.toUpperCase() || 'anonymous person!';
        console.log(hello);
    };

    hiV2('Joaquin');

    hiV2(null);
})();

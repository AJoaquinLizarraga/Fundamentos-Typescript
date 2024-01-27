"use strict";
(() => {
    let name;
    let myNull = null;
    let myUndefined = undefined;
    let number = undefined;
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
    const hiV2 = (name) => {
        let hello = 'Hello, ';
        hello += (name === null || name === void 0 ? void 0 : name.toUpperCase()) || 'anonymous person!';
        console.log(hello);
    };
    hiV2('Joaquin');
    hiV2(null);
})();

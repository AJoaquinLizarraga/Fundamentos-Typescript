/** @format */

(() => {
    let producto: string = 'Televisor';
    // nombre = 123  esta mal
    console.log(producto);

    let descripcion = 'SmartTv 60"';
    console.log(descripcion);

    const summary = `
    "product": ${producto}
    "description": "${descripcion}"
    `;
    console.log(summary);
})();

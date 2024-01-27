export type Sizes = 'S' | 'M' | 'L' | 'XL';

export type Product = {
    // este type es mas complejo, ya cuenta con otro type adentro
    title: string;
    createAt: Date;
    stock: number;
    size?: Sizes; // el optionalchaining hace que el parametro sea opcional
};

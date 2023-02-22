/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}

export function calculaISV(productos: Producto[]): [number, number]{
    let total = 0;
    productos.forEach( ({ precio } ) => {
        total += precio;
    })
    return [total, total * 0.15];
}

/*En el bucle podríamos poner como argumento producto, porque va a recorrer cada producto del array 
Productos o podemos usar la desestructuración y decir solo precio, porque se sobre entiende que son 
las propiedades de cada producto*/

const articulos = [telefono, tableta];

const [total, isv] = calculaISV(articulos);

console.log('Total:', total);
console.log('ISV:', isv);
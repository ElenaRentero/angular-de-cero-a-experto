import { Producto, calculaISV } from './06-desestructuracion-funcion';
/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }
];

const [total, isv] = calculaISV(carritoCompras);

console.log('Total', total);
console.log('ISV', isv);

/*Al importar la función calculaISV lee todo el documento anterior y si tenemos alguna función o console
después o antes lo ejecuta, por ello en la consola del navegador aparece el resultado dos veces, primero
el resultado del otro documento de donde saca la función, donde se exporta y después de este donde se 
importa*/
import { Product, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
];

const [ total, tax ] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total', total);
console.log('Tax', tax);

/*Al importar la función taxCalculation lee todo el documento anterior y si tenemos alguna función o console
después o antes lo ejecuta, por ello en la consola del navegador aparece el resultado dos veces, primero
el resultado del otro documento de donde saca la función, donde se exporta y después de este donde se 
importa*/
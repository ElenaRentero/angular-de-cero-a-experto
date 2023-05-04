export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// function taxCalculation({ tax, products }: TaxCalculationOptions): [number, number] { se puede desestructurar en los parámetros de la función pero no se hace si son muchos
export function taxCalculation(options: TaxCalculationOptions): [number, number] {

    const { tax, products } = options; // si son muchos los parámetros y para mejorar la legibilidad se pueden desestructurar en una nueva variable

    let total = 0;

    products.forEach(({ price }) => {
        total += price;
    });

    return [total, total * tax];
}

/*En el bucle podríamos poner como argumento producto, porque va a recorrer cada producto del array 
Productos o podemos usar la desestructuración y decir solo precio, porque se sobre entiende que son 
las propiedades de cada producto*/

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax // En el caso en el que la variable tiene el mismo nombre se puede poner solo tax y JS lo entendería
})

console.log('Total', total);
console.log('Tax', taxTotal);
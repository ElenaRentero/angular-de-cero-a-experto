
export function whatsMyType<T>(argument: T): T {
    return argument;
}

let amIString = whatsMyType<string>('Hola Mundo');
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));

/*La <T> es un estándar para especificar que es un genérico, si lo ponemos en el argumento que le estamos
pasando lo que hacemos es decir específicamente qué tipo es, aunque debe ir entre <>. Estos símbolos 
significa que es de tipo genérico y un tipo genérico puede ser cualquier tipo o cualquier tipo de dato que
nosotros especifiquemos ya sea a la hora de llamarlo (soyExplicito) o algo implícito (soyString)*/
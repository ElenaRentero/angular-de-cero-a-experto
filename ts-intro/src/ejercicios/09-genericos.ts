/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento: T) {
    return argumento
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(100);
let soyArray = queTipoSoy([1,2,3,4,5]);
let soyArray2 = queTipoSoy(['a','b','c','d']);
let soyExplicito = queTipoSoy<number>(100);

/*La <T> es un estándar para especificar que es un genérico, si lo ponemos en el argumento que le estamos
pasando lo que hacemos es decir específicamente qué tipo es, aunque debe ir entre <>. Estos símbolos 
significa que es de tipo genérico y un tipo genérico puede ser cualquier tipo o cualquier tipo de dato que
nosotros especifiquemos ya sea a la hora de llamarlo (soyExplicito) o algo implícito (soyString)*/
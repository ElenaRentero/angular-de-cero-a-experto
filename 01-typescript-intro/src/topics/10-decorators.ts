/*Los decoradores sirven para cambiar las clases en el momento en el que son definidas, es decir para que
cuando se usen estos decoradores, en el momento en el que esté compilando las va a extender internamente 
esas funcionalidades que nosotros estamos queriendo implementar. Angular usa bastante los decoradores
para cambiar las cosas. Un decorador no es más que una función. Estos sirven para expandir o añadir 
funcionalidades y Angular los usa mucho para diferenciar las clases de los componentes, pipes o directivas*/

function classDecorator<T extends { new(...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}

@classDecorator
export class SuperClass {
    public myProperty: string = 'Abc123';

    print() {
        console.log('Hola Mundo')
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);
/*
    ===== Código de TypeScript =====
*/

/*Los decoradores sirven para cambiar las clases en el momento en el que son definidas, es decir para que
cuando se usen estos decoradores, en el momento en el que esté compilando las va a extender internamente 
esas funcionalidades que nosotros estamos queriendo implementar. Angular usa bastante los decoradores
para cambiar las cosas. Un decorador no es más que una función. Estos sirven para expandir o añadir 
funcionalidades y Angular los usa mucho para diferenciar las clases de los componentes, pipes o directivas*/

function classDecorator<T extends {new (...args: any[]): {}}>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
}

@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';
    imprimir(){
        console.log('Hola Mundo');
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);
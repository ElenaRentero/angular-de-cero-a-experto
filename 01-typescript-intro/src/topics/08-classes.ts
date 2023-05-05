/* export class Person {
    public name: string;
    private addres: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.addres = address;
    }
} Normalmente no se hace de esta manera, se puede acortar mucho más como abajo */

export class Person {
    // public name: string;
    // private address: string;
    constructor(
        public firstName: string,
        public lastName: string,
        private address: string = 'No Address' /* Se puede poner un valor por defecto */) { }
}

/*Cuando no tenemos un tipo explícito o nivel de acceso explícito, todas son públicas por defecto.
- Private: propiedad solo visible dentro de esa clase.
- Public: fuera de la clase se puede ver esa propiedad.
- Static: que se puede acceder al valor de esa propiedad sin crear una instancia de la clase.*/

/* export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
    ) {
        super(realName, 'New York');
    }
} En este caso se prioriza la extensión de la clase Person */

/*Podemos extender una clase con o añadiendo otras propiedades y métodos de otras clases 
(fundamento de la programación orientada a objetos)*/

export class Hero {
    // public person: Person;
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        // this.person = new Person(realName);
    }
} /* Lo mismo pero sin extensión, priorizando la composición */

const tony = new Person('Tony', 'Stark', 'New York');

const ironman = new Hero('Ironman', 45, 'Tony', tony);

console.log(ironman);

/*Una clase y una instancia son muy similares, la única diferencia es que la interfaz en un archivo de 
JS no aparecería porque no existen en este lenguaje, a diferencia de las cases que sí existen en JS. 
LAS CLASES SIRVEN PARA CREAR INSTANCIAS. Las interfaces son como clases tontas, en ellas podemos crear 
una función pero no decir lo que hace solo poner el resultado que va a dar, en cambio en una clase sí 
que podemos añadir una función y lo que va a hacer*/
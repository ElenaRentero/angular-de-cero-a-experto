/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) {}
}

/*class Heroe {
    private alterEgo: string;
    public edad: number;
    static nombreReal: string;
    imprimirNombre() {
        return this.alterEgo + ' ' + this.nombreReal;
    }
    constructor(alterEgo: string, edad: number, nombreReal: string){
        this.alterEgo = alterEgo;
        this.edad = edad;
        this.nombreReal = nombreReal;
    }
} 

Cuando no tenemos un tipo explícito o nivel de acceso explícito, todas son públicas por defecto.
- Private: propiedad solo visible dentro de esa clase.
- Public: fuera de la clase se puede ver esa propiedad.
- Static: que se puede acceder al valor de esa propiedad sin crear una instancia de la clase.

Otra manera de hacer esto pero sin repetir tanto código sería...*/

class Heroe extends PersonaNormal {
    constructor(
        public alterEgo: string, 
        public edad: number, 
        public nombreReal: string
    ) {
        super(nombreReal, 'New York, USA');
    }
}

/*Podemos extender una clase con o añadiendo otras propiedades y métodos de otras clases 
(fundamento de la programación orientada a objetos)*/

interface Personaje2 {
    alterEgo?: string;
    edad?: number;
    nombreReal?: string;
    imprimirNombre: () => string;
}

/*Una clase y una instancia son muy similares, la única diferencia es que la interfaz en un archivo de 
JS no aparecería porque no existen en este lenguaje, a diferencia de las cases que sí existen en JS. 
LAS CLASES SIRVEN PARA CREAR INSTANCIAS. Las interfaces son como clases tontas, en ellas podemos crear 
una función pero no decir lo que hace solo poner el resultado que va a dar, en cambio en una clase sí 
que podemos añadir una función y lo que va a hacer*/

const ironman = new Heroe('Ironman', 45, 'Tony Stark');

console.log(ironman);
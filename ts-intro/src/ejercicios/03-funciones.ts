/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return (a + b);
}

const sumarFlecha = (a: number, b: number): number => a + b;

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

//const resultado = multiplicar(5, 0, 10);

//console.log(resultado);

/*En la función ultiplicar se pasan 3 parámetros numero, otroNumero y base. En este caso otroNumero es
un parámetro opcional por lo que tenemos que ponerle ?, si le pasamos solo dos números los coloca por el
orden que tienen entonces el 5 sería numbero y el 0 otroNumero, siendo el 10 la base. En el caso de que
solo le pasemos dos, la base no tendría ningun numero y es por eso que le hemos puesto un valor por 
defecto que es igual a 2. Se recomienda poner primero los parámetros obligatorios y luego los opcionales*/

interface PersonajeLOTR {
    nombre: string;
    pv: number;
    mostrarHp: () => void; //Manera de indicar que es una función
}

function curar(personaje: PersonajeLOTR, curarX: number): void {
    personaje.pv += curarX;
}

/*Si una función no regresa nada se pone void*/

const nuevoPersonaje: PersonajeLOTR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log( 'Puntos de vida:', this.pv );
    }
}

curar (nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();
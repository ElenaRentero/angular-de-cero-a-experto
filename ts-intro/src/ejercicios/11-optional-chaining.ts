/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Fernando',
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos(pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimeHijos(pasajero1); 

/*Al no tener hijos aparece undefined en la consola. Si no ponemos la interrogación en la const 
cuantosHijos nos da un error porque no encuentra la propiedad hijos en pasajero1, si usamos el 
operador lógico OR || de esta manera si es undefined es false por lo que imprime 0*/
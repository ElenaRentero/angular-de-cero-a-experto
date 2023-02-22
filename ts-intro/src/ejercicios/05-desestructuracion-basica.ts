/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Ness',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const autor = 'Fulano';

const {volumen, segundo, cancion, detalles} = reproductor;
const {autor: autorDetalle, anio: anioDetalle} = detalles; 

/*Con esto desestructuramos de los detalles el autor y el año, pero primero debemos desestructurar los 
detalles en la variable superior*/

/*const { volumen, segundo, cancion, detalles: { autor: autorDetalle, anio: anioDetalle } } = reproductor;

De esta manera podemos desestructurar en una sola línea, aunque lleva a confusión porque podemos pensar
que es un tipo de TypeScript, él recomienda lo de abajo. Además si tenemos una variable que lleva el 
mismo nombre que otra y queremos cambiarlo, podemos hacerlo dentro de la desestructuración poniendo : 
y el nombre nuevo que queremos darle*/


console.log('El volumen actual es de:', volumen);
console.log('Se encuentra en el segundo:', segundo);
console.log('La cancion actual se llama:', cancion);
console.log('El autor es:', autorDetalle);
console.log('El año de lanzamiento de la cancion es:', anioDetalle);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']; 
const [ , , p3 ] = dbz;

console.log('Personaje 1:', dbz[0]);
console.log('Personaje 2:', dbz[1]);
console.log('Personaje 3:', p3);

/*En la desestructuración de arrays la posición es lo importante, no el nombre. En el caso de que
solo necesitemos un personaje en concreto como el 3 dejamos las comas solas*/
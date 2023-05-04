interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const song = 'New Song';

const { song: anotherSong, songDuration: duration, details: details } = audioPlayer;
const { author } = details;

// Para desestructurar una propiedad dentro de details podría ponerse así const { details: { author } } = audioPlayer;

/*De esta manera podemos desestructurar en una sola línea, aunque lleva a confusión porque podemos pensar
que es un tipo de TypeScript, él recomienda lo de abajo. Además si tenemos una variable que lleva el 
mismo nombre que otra y queremos cambiarlo, podemos hacerlo dentro de la desestructuración poniendo : 
y el nombre nuevo que queremos darle*/

console.log('Song:', anotherSong);
console.log('Duration:', duration);
console.log('Author:', author);

const [, , trunks = 'Not found']: string[] = ['Goku', 'Vegeta'];

console.log('Personaje 3:', trunks);

/*En la desestructuración de arrays la posición es lo importante, no el nombre. En el caso de que
solo necesitemos un personaje en concreto como el 3 dejamos las comas solas*/

export { };
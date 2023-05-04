function addNumbers(a: number, b: number) {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

const result: number = addNumbers(1, 2);
const result2: string = addNumbersArrow(1, 2);
const multiplyResult: number = multiply(5);

console.log({ result, result2, multiplyResult })

/*En la función ultiplicar se pasan 3 parámetros numero, otroNumero y base. En este caso otroNumero es
un parámetro opcional por lo que tenemos que ponerle ?, si le pasamos solo dos números los coloca por el
orden que tienen entonces el 5 sería numbero y el 0 otroNumero, siendo el 10 la base. En el caso de que
solo le pasemos dos, la base no tendría ningun numero y es por eso que le hemos puesto un valor por 
defecto que es igual a 2. Se recomienda poner primero los parámetros obligatorios y luego los opcionales*/

interface Character {
    name: string;
    hp: number;
    showHp: () => void; //Manera de indicar que es una función
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

/*Si una función no regresa nada se pone void*/

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 10);

strider.showHp();

export { };
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fernando',
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Elizabeth']
}

const returnChildrenNumber = (passenger: Passenger): number => {

    const howManyChildren = passenger.children?.length || 0;
    // const howManyChildren = passenger.children!.length;  Non-null assertion operator forma de decirle a Ts que nunca va a recibir null

    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}

/*Al no tener hijos aparece undefined en la consola. Si no ponemos la interrogación en la const 
howManyChildren nos da un error porque no encuentra la propiedad hijos en passenger1, si usamos el 
operador lógico OR || de esta manera si es undefined es false por lo que imprime 0*/

returnChildrenNumber(passenger1);
returnChildrenNumber(passenger2);
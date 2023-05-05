import { Injectable } from "@angular/core";
import { v4 as uuid } from 'uuid';

import { Character } from "../interfaces/character.interfaces";

@Injectable({
  providedIn: 'root' // El providedIn: 'root' hace que este servicio se pueda usar en toda la aplicación sin necesidad de ponerlo en los providers del dbz.module.ts
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter( character: Character ):void {
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number) {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById( id: string ) {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}

// Un servicio es un lugar centralizado donde tenemos información de la aplicación que podemos compartir entre los componentes que queramos
import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
 //  @Input() personajes: Personaje[] = []; Con el @Input le decimos que esta propiedad va a venir del componente padre

 get personajes() {
  return this.dbzService.personajes;
 } // Ya no hace falta el Input me traigo el listado de personajes del servicio

  constructor(private dbzService: DbzService) {}
}

import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html'
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter(); // Decorador que hace una emisión del componente hijo al padre, como un lifting en React

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character = { name: '', power: 0 };
  }
}

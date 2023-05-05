import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() // Con el @Input le decimos que esta propiedad va a venir del componente padre
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output() // Decorador que hace una emisión del componente hijo al padre, como un lifting en React
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDelete.emit(id)
  }
}

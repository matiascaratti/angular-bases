import { Character } from './../../interfaces/character.interface';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  onDelete(id: number):void {
    this.onDeleteCharacter.emit(id);
  }

  // onDeleteCharacter(index: number):void {
  //   // TODO: Emitir el ID del personaje
  //   console.log(index)
  // }
}

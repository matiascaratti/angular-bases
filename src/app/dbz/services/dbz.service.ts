import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  },{
    name: 'Goku',
    power: 9500
  },{
    name: 'Vegeta',
    power: 7500
  }];

  onNewCharacter( character: Character ):void {
    this.characters.push(character); //unshift al inicio
  }

  onDeleteCharacter( id: number ):void {
    //debugger;
    this.characters.splice(id, 1);
  }

}

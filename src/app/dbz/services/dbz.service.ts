import { Injectable } from '@angular/core';
import { Personaje } from '../intefaces/dbz.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'goku',
      poder: 1400
    },
    {
      nombre: 'vegeta',
      poder: 1300
    }, {
      nombre: 'yamcha',
      poder: 1
    }
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }
  constructor() {
  }
  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}

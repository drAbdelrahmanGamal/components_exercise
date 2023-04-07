import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root',
})
export class ZooService {
  getAnimals(): Animal[] {
    return [
      {
        id: 1,
        name: 'Panda',
        fed: true,
      },
      {
        id: 2,
        name: 'Elephant',
        fed: true,
      },
      {
        id: 3,
        name: 'Lion',
        fed: false,
      },
    ];
  }
  constructor() {}
}

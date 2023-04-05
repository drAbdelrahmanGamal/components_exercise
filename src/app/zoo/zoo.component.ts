import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/animal';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css'],
})
export class ZooComponent implements OnInit {
  animalList: Animal[] = [];

  ngOnInit() {
    this.animalList = [
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

  onLike(animal: Animal): void {
    window.alert(`I like the ${animal.name}!`);
  }
}

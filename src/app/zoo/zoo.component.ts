import { Component, OnInit } from '@angular/core';
import { Animal } from '../models/animal';
import { ZooService } from '../services/zoo.service';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css'],
})
export class ZooComponent implements OnInit {
  animalList: Animal[] = [];

  constructor(private zooService: ZooService) {}

  ngOnInit() {
    this.animalList = this.zooService.getAnimals();
  }

  onLike(animal: Animal): void {
    window.alert(`I like the ${animal.name}!`);
  }
}

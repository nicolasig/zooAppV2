import { Component, OnInit, HostBinding } from '@angular/core';
import { AnimalsService } from '../../services/animals.service';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})

export class AnimalListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  animals: any = [];

  constructor(private animalsService: AnimalsService) { }

  ngOnInit() {
    this.getAnimals();
  }

  getAnimals() {
    this.animalsService.getAnimals().subscribe(
      res => {
        this.animals = res;
      },
      err => console.log(err)
    );
  }

  deleteAnimal(id: string) {
    this.animalsService.deleteAnimal(id).subscribe(
      res => {
        console.log(res);
        this.getAnimals();
      },
      err => console.error(err)
    )
  }

}

import { Component, OnInit, HostBinding } from '@angular/core';
import { Animal } from 'src/app/models/Animal';
import { AnimalsService } from '../../services/animals.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})

export class AnimalFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  animal: Animal = {
    id: 0,
    name: '',
    species: '',
    age: 0
  };

  edit: boolean = false;

  constructor(private animalsService: AnimalsService, private router: Router, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;

    if (params.id) {
      this.animalsService.getAnimal(params.id).subscribe(
        res => {
          console.log(res);
          this.animal = res;
          this.edit=true;
        },
        err => console.log(err)
      )
    }

  }

  saveNewAnimal(){
    delete this.animal.id;
    this.animalsService.saveAnimal(this.animal).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/']);
      },
      err => console.error(err)
    )
  }

  updateAnimal(){
    this.animalsService.updateAnimal(this.animal.id, this.animal).subscribe(
      res => {
        console.log(this.animal.id);
        this.router.navigate(['/']);
      },
      err => console.error(err)
    )
  }

}

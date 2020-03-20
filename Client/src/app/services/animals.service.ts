import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../models/Animal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AnimalsService {
  api_uri = 'http://localhost:3000/';

  constructor(private http : HttpClient) { }

  getAnimals(){
    return this.http.get(`${this.api_uri}`);
  }

  getAnimal(id: string): Observable<any> {
    return this.http.get(`${this.api_uri}${id}`);
  }

  saveAnimal(animal: Animal){
    return this.http.post(`${this.api_uri}`, animal);
  }

  deleteAnimal(id: string){
    return this.http.delete(`${this.api_uri}${id}`);
  }

  updateAnimal(id: string|number, updatedAnimal: Animal): Observable<any> {
    return this.http.put(`${this.api_uri}${id}`, updatedAnimal);
  }

}


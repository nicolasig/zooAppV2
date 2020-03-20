import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { AnimalFormComponent } from './components/animal-form/animal-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/animals',
    pathMatch: 'full'
  },
  {
    path: 'animals',
    component: AnimalListComponent
  },
  {
    path: 'animals/add',
    component: AnimalFormComponent
  },
  {
    path: 'animals/edit/:id',
    component: AnimalFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

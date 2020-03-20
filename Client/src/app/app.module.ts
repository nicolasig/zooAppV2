import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AnimalFormComponent } from './components/animal-form/animal-form.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { AnimalsService } from './services/animals.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AnimalFormComponent,
    AnimalListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AnimalsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

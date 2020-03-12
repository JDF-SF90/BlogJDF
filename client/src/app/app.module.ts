import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CategorieFormComponent } from './components/categorie-form/categorie-form.component';
import { CategorieListComponent } from './components/categorie-list/categorie-list.component';

import { CategoriesService } from './services/categories.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CategorieFormComponent,
    CategorieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ CategoriesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

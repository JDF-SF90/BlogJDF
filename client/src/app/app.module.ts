import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CategorieFormComponent } from './components/categorie-form/categorie-form.component';
import { CategorieListComponent } from './components/categorie-list/categorie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CategorieFormComponent,
    CategorieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

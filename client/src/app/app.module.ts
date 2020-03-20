import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CategorieListComponent } from './components/categorie-list/categorie-list.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { CategoriesService } from './services/categories.service';
import { TopicFormComponent } from './components/topic-form/topic-form.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CategorieFormComponent } from './components/categorie-list/categorie-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CategorieListComponent,
    TopicListComponent,
    TopicFormComponent,
    CategorieFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [CategorieFormComponent],
  providers: [ CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CategorieFormComponent } from './components/categorie-form/categorie-form.component';
import { CategorieListComponent } from './components/categorie-list/categorie-list.component';
import { TopicListComponent } from './components/topic-list/topic-list.component';
import { CategoriesService } from './services/categories.service';
import { TopicFormComponent } from './components/topic-form/topic-form.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CategorieFormComponent,
    CategorieListComponent,
    TopicListComponent,
    TopicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [ CategoriesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

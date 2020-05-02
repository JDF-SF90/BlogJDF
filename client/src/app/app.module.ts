import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { TopicViewComponent } from './components/topic-view/topic-view.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CategorieListComponent,
    TopicListComponent,
    TopicFormComponent,
    CategorieFormComponent,
    TopicViewComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent
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
  providers: [ CategoriesService, AuthService, AuthGuard,
              { provide: HTTP_INTERCEPTORS,
                useClass: TokenInterceptorService,
                multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicListComponent } from '../app/components/topic-list/topic-list.component';
import { CategorieListComponent } from '../app/components/categorie-list/categorie-list.component';
import { TopicFormComponent } from '../app/components/topic-form/topic-form.component';
import { TopicViewComponent } from './components/topic-view/topic-view.component';
<<<<<<< HEAD
import { SignupViewComponent } from './components/signup-view/signup-view.component';

=======
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './auth.guard';
>>>>>>> new_branch

const routes: Routes = [
  {
    path: '',
    redirectTo: '/topics',
    pathMatch: 'full'
  },
  {
    path: 'topics',
    component: TopicListComponent
  },
  {
    path: 'categorias',
    component: CategorieListComponent
    // canActivate: [AuthGuard]
  },
  {
    path: 'topics/add',
    component: TopicFormComponent
  },
  {
    path: 'topics/:id',
    component: TopicListComponent
  },
  {
    path: 'topicView/:id',
    component: TopicViewComponent
  },
  {
<<<<<<< HEAD
    path: 'SignUp',
    component: SignupViewComponent
=======
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
>>>>>>> new_branch
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicListComponent } from '../app/components/topic-list/topic-list.component';
import { CategorieListComponent } from '../app/components/categorie-list/categorie-list.component';
import { TopicFormComponent } from '../app/components/topic-form/topic-form.component';

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
  },
  {
    path: 'topics/add',
    component: TopicFormComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

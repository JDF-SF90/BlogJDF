import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicListComponent } from '../app/components/topic-list/topic-list.component';
import { CategorieListComponent } from '../app/components/categorie-list/categorie-list.component';


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
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

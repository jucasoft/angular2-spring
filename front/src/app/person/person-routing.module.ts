import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonListComponent} from "./person-list/person-list.component";
import {PersonDetailComponent} from "./person-detail/person-detail.component";

const routes: Routes = [
  {
    path: 'person',
    children: [
      {path: 'list', component: PersonListComponent},
      {path: 'detail/:id', component: PersonDetailComponent}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }

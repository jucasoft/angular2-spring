import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PersonListComponent} from "./person-list/person-list.component";
import {PersonComponent} from "./person/person.component";

const routes: Routes = [
  {path: '', component: PersonListComponent},
  {path: 'person', component: PersonListComponent},
  {path: 'person/:id', component: PersonComponent},
  {
    path: 'document',
    loadChildren: 'app/document/document.module#DocumentModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  //
  // constructor(router: Router) {
  //   console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  // }
}

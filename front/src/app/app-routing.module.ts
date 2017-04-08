import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PersonListComponent} from "./person/person-list/person-list.component";

const routes: Routes = [
  {path: '', component: PersonListComponent},
  {
    path: 'document',
    loadChildren: 'app/document/document.module#DocumentModule'
  },
  {
    path: 'person',
    loadChildren: 'app/person/person.module#PersonModule'
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

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DocumentListComponent} from "./document-list/document-list.component";
import {DocumentDetailComponent} from "./document-detail/document-detail.component";

const routesD: Routes = [
  {
    path: 'document',
    children: [
      {path: '', component: DocumentListComponent},
      {path: '/:id', component: DocumentDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesD)],
  exports: [RouterModule]
})
export class DocumentRoutingModule {
}

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {DocumentRoutingModule} from "./document-routing.module";
import {DocumentListComponent} from "./document-list/document-list.component";
import {DocumentDetailComponent} from "./document-detail/document-detail.component";
import {ShareModule} from "../share/share.module";
import {DocumentService} from "./service/document.service";

@NgModule({
  imports: [
    CommonModule,
    DocumentRoutingModule,
    ShareModule
  ],
  declarations: [
    DocumentListComponent,
    DocumentDetailComponent
  ],
  providers: [
    DocumentService
  ]
})
export class DocumentModule {
}

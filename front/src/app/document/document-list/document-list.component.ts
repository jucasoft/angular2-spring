import {Component} from "@angular/core";
import {Router} from "@angular/router";

import "rxjs/add/operator/switchMap";
import {DocumentService} from "../service/document.service";
import {Document} from "../model/vo/document";
import {ListComponent} from "@share/components/list.component";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent extends ListComponent<Document> {

  protected detailURL = 'document/item';

  constructor(protected service: DocumentService, protected router: Router) {
    super();
  }
}

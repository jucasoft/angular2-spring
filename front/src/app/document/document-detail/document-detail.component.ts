import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {DocumentService} from "../service/document.service";
import {Document} from "../model/vo/document";
import {DetailComponent} from "@share/components/detail.component";

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent extends DetailComponent<Document> {

  protected detailURL = 'person/detail';

  constructor(protected router: Router, protected route: ActivatedRoute, protected service: DocumentService) {
    super();
  }
}

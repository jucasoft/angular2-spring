import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {DocumentService} from "../service/document.service";
import {EntityBase} from "@share/model/vo/entity-base";
import {Observable} from "rxjs/Observable";
import {doNothing, hideLoading, showLoading} from "@share/commons";
import {Response} from "@angular/http";

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {

  item: EntityBase;

  constructor(private router: Router, private route: ActivatedRoute, private service: DocumentService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.get(Number(params['id'])).subscribe(value => this.item = value);
    });

  }

  delete(person) {
    let observable: Observable<Response> = this.service.delete(person.id);
    showLoading();
    observable.subscribe(doNothing, hideLoading, () => {
      this.router.navigate(['']);
      hideLoading();
    });
  }

  back() {
    history.back();
  }
}

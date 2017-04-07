import {Component, OnInit} from "@angular/core";
import {Table} from "../../table";
import {PaginationPage, PaginationPropertySort} from "../../pagination";
import {Router} from "@angular/router";
import {doNothing, hideLoading, showLoading} from "../../commons";
import {Response} from "@angular/http";

import "rxjs/add/operator/switchMap";
import {Observable} from "rxjs/Observable";
import {PagebleCriteria} from "@commons/model/vo/pageble-criteria";
import {DocumentService} from "../service/document.service";
import {Document} from "../model/vo/document";
import {IEntity} from "@commons/model/api/ientity";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit, Table<Document> {

  list: PaginationPage<Document>;
  self: Table<Document>;
  currentItem:IEntity;

  constructor(private service: DocumentService, private router: Router) {

  }

  ngOnInit() {
    let observable: Observable<PaginationPage<any>> = this.fetchPage(0, 10, null);
    showLoading();
    observable.subscribe(doNothing, hideLoading, hideLoading);
    this.self = this;
  }

  fetchPage(pageNumber: number, pageSize: number, sort: PaginationPropertySort): Observable<PaginationPage<Document>> {
    let criteria: PagebleCriteria = new PagebleCriteria(pageNumber, pageSize, sort);
    let observable: Observable<PaginationPage<Document>> = this.service.search(criteria);
    observable.subscribe(result => this.list = result);
    return observable;
  }

  goToDetails(item:IEntity) {
    this.router.navigate(['item', item.id]);
  }

  delete(item:IEntity) {
    let observable: Observable<Response> = this.service.delete(item);
    showLoading();
    observable.switchMap(() => {
      return this.fetchPage(0, 10, null);
    }).subscribe(doNothing, hideLoading, hideLoading);
  }
}

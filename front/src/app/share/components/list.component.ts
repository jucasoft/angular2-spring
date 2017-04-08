import {OnInit} from "@angular/core";
import {Response} from "@angular/http";
import {Router} from "@angular/router";

import "rxjs/add/operator/switchMap";

import {PaginationPage, PaginationPropertySort} from "@share/pagination";
import {Table} from "@share/table";
import {doNothing, hideLoading, showLoading} from "@share/commons";
import {Observable} from "rxjs/Observable";
import {PagebleCriteria} from "@share/model/vo/pageble-criteria";
import {IEntity} from "@share/model/api/ientity";
import {BaseService} from "@share/services/base.service";


export class ListComponent<T> implements OnInit, Table<T> {

  protected detailURL = '';
  protected list: PaginationPage<T>;
  protected self: Table<T>;

  protected service: BaseService<T>;
  protected router: Router;

  ngOnInit() {
    let observable: Observable<PaginationPage<any>> = this.fetchPage(0, 10, null);
    showLoading();
    observable.subscribe(doNothing, hideLoading, hideLoading);
    this.self = this;
  }

  fetchPage(pageNumber: number, pageSize: number, sort: PaginationPropertySort): Observable<PaginationPage<T>> {
    let criteria: PagebleCriteria = new PagebleCriteria(pageNumber, pageSize, sort);
    let observable: Observable<PaginationPage<T>> = this.service.search(criteria);
    observable.subscribe(result => this.list = result);
    return observable;
  }

  goToDetails(item: IEntity) {
    this.router.navigate([this.detailURL, item.id]);
  }

  delete(item: IEntity) {
    let observable: Observable<Response> = this.service.delete(item);
    showLoading();
    observable.switchMap(() => {
      return this.fetchPage(0, 10, null);
    }).subscribe(doNothing, hideLoading, hideLoading);
  }
}

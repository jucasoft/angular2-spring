import {Injectable} from "@angular/core";
import {IService} from "@share/services/iservice";
import {Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {environment} from "@environments/environment";
import {PaginationPage} from "@share/pagination";
import {ICriteria} from "@share/model/api/icriteria";
import "rxjs/add/operator/map";
import "rxjs/add/operator/publish";
import {IEntity} from "@share/model/api/ientity";

@Injectable()
export class BaseService<T> implements IService<T> {

  protected service = '';
  protected url = environment.webServiceEndpoint;

  protected getUrl(): string {
    return this.url + this.service;
  }

  constructor(public http: Http) {
  }

  create(value: T): Observable<T> {
    return null;
  }

  delete(item: IEntity): Observable<Response> {
    return this.http.delete(`${this.getUrl()}/${item.id}`).publish().refCount();
  }

  update(value: T): Observable<T> {
    return null;
  }

  get(id: number): Observable<T> {
    return this.http.get(`${this.getUrl()}/${id}`).map(this.extractData).publish().refCount();
  }

  search(criteria: ICriteria): Observable<PaginationPage<T>> {
    let params = criteria.getParams();
    let options = new RequestOptions({
      search: params
    });
    return this.http.get(`${this.getUrl()}`, options).map(this.extractData).publish().refCount();
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

}

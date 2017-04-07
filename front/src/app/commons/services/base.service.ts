import {Injectable} from "@angular/core";
import {IService} from "@commons/services/iservice";
import {Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {environment} from "@environments/environment";
import {PaginationPage} from "../../pagination";
import {ICriteria} from "@commons/model/api/icriteria";
import "rxjs/add/operator/map";
import "rxjs/add/operator/publish";
import {IEntity} from "@commons/model/api/ientity";

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

  delete(item:IEntity): Observable<Response> {
    return this.http.delete(`${this.getUrl()}/${item.id}`).publish().refCount();
  }

  update(value: T): Observable<T> {
    return null;
  }

  get(id:string): Observable<T> {
    return null;
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

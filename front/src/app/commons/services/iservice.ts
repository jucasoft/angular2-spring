import {Observable} from "rxjs/Observable";
import {ICriteria} from "@commons/model/api/icriteria";
import {PaginationPage} from "../../pagination";
import {Response} from "@angular/http";
import {IEntity} from "@commons/model/api/ientity";
export interface IService<T> {
  create(value: T): Observable<T>;
  delete(value:IEntity): Observable<Response>;
  update(value: T): Observable<T>;
  get(id: string): Observable<T>;
  search(criteria: ICriteria): Observable<PaginationPage<T>>;

}

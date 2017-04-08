import {Observable} from "rxjs/Observable";
import {ICriteria} from "@share/model/api/icriteria";
import {PaginationPage} from "@share/pagination";
import {Response} from "@angular/http";
import {IEntity} from "@share/model/api/ientity";
export interface IService<T> {
  create(value: T): Observable<T>;
  delete(value:IEntity): Observable<Response>;
  update(value: T): Observable<T>;
  get(id: number): Observable<T>;
  search(criteria: ICriteria): Observable<PaginationPage<T>>;

}

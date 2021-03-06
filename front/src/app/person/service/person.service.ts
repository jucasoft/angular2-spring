import {Injectable} from "@angular/core";
import {Person} from "../model/vo/person";
import "rxjs/add/operator/map";
import "rxjs/add/operator/publish";
import {BaseService} from "@share/services/base.service";

@Injectable()
export class PersonService extends BaseService<Person> {
  protected service = 'api/person';
  //
  // constructor(private http: Http) {
  //
  // }
  //
  // findPersons(page: number, pageSize: number, sort: PaginationPropertySort): Rx.Observable<PaginationPage<Person>> {
  //     let params = new URLSearchParams();
  //     params.set('size', `${pageSize}`);
  //     params.set('page', `${page}`);
  //     if (sort != null) {
  //         params.set('sort', `${sort.property},${sort.direction}`);
  //     }
  //
  //     let options = new RequestOptions({
  //         search: params
  //     });
  //     return this.http.get(`${environment.webServiceEndpoint}api/person`, options).map(this.extractData).publish().refCount();
  // }
  //
  // getPerson(id: number): Rx.Observable<Person> {
  //     return this.http.get(`${environment.webServiceEndpoint}api/person/${id}`).map(this.extractData).publish().refCount();
  // }
  //
  // deletePerson(id: number): Rx.Observable<Response> {
  //     return this.http.delete(`${environment.webServiceEndpoint}api/person/${id}`).publish().refCount();
  // }
  //
  // private extractData(res: Response) {
  //     let body = res.json();
  //     return body || {};
  // }
}

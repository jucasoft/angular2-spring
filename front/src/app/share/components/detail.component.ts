import {OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Response} from "@angular/http";

import {doNothing, hideLoading, showLoading} from "@share/commons";
import {IEntity} from "@share/model/api/ientity";
import {Observable} from "rxjs/Observable";
import {BaseService} from "@share/services/base.service";

export class DetailComponent<T> implements OnInit {

  item: T;
  onDeleteUrl='';

  protected router: Router;
  protected route: ActivatedRoute;
  protected service: BaseService<T>;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.get(Number(params['id'])).subscribe(person => this.item = person);
    });

  }

  delete(item: IEntity) {
    let observable: Observable<Response> = this.service.delete(item);
    showLoading();
    observable.subscribe(doNothing, hideLoading, () => {
      this.router.navigate([this.onDeleteUrl]);
      hideLoading();
    });
  }

  back() {
    history.back();
  }
}

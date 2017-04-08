import {Component} from "@angular/core";
import {Router} from "@angular/router";

import "rxjs/add/operator/switchMap";
import {PersonService} from "../service/person.service";
import {Person} from "../model/vo/person";
import {ListComponent} from "@share/components/list.component";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent extends ListComponent<Person> {

  detailURL = 'person/detail';

  constructor(protected service: PersonService, protected router: Router) {
    super();
  }
}

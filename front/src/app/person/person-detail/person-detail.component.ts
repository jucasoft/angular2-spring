import {Component} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

import {PersonService} from "../service/person.service";
import {Person} from "../model/vo/person";
import {DetailComponent} from "@share/components/detail.component";

@Component({
  selector: 'person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent extends DetailComponent<Person> {

  onDeleteUrl='person/list';

  constructor(protected router: Router, protected route: ActivatedRoute, protected service: PersonService) {
    super();
  }

}

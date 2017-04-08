import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Response} from "@angular/http";
import * as Rx from "rxjs/Rx";

import {PersonService} from "../service/person.service";
import {Person} from "../model/vo/person";
import {doNothing, hideLoading, showLoading} from "@share/commons";

@Component({
  selector: 'person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  person: Person;

  constructor(private router: Router, private route: ActivatedRoute, private personService: PersonService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.personService.getPerson(Number(params['id'])).subscribe(person => this.person = person);
    });

  }

  delete(person) {
    let observable: Rx.Observable<Response> = this.personService.deletePerson(person.id);
    showLoading();
    observable.subscribe(doNothing, hideLoading, () => {
      this.router.navigate(['']);
      hideLoading();
    });
  }

  back() {
    history.back();
  }
}

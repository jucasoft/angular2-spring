import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonListComponent } from './person-list/person-list.component';
import {PersonService} from "./service/person.service";
import {ShareModule} from "../share/share.module";

@NgModule({
  imports: [
    CommonModule,
    PersonRoutingModule,
    ShareModule
  ],
  declarations: [PersonDetailComponent, PersonListComponent],
  providers: [PersonService]
})
export class PersonModule { }

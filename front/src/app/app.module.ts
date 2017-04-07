import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";

import {AppComponent} from "./app.component";
import {PersonComponent} from "./person/person.component";
import {PersonListComponent} from "./person-list/person-list.component";
import {PersonService} from "./person.service";
import {AppRoutingModule} from "./app-routing.module";
import {DocumentModule} from "./document/document.module";
import {ShareModule} from "./share/share.module";

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonListComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule,
    DocumentModule,
    ShareModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

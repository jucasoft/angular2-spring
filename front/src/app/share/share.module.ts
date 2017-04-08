import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {TableElementsCountComponent} from "@table/table-elements-count/table-elements-count.component";
import {TablePaginationComponent} from "@table/table-pagination/table-pagination.component";
import {TableSortComponent} from "@table/table-sort/table-sort.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TableElementsCountComponent,
    TablePaginationComponent,
    TableSortComponent
  ],
  exports:[
    TableElementsCountComponent,
    TablePaginationComponent,
    TableSortComponent
  ],
})
export class ShareModule {
}

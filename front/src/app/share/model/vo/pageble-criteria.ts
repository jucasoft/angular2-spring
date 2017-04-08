import {PaginationPropertySort} from "@share/pagination";
import {ICriteria} from "@share/model/api/icriteria";
export class PagebleCriteria implements ICriteria{

  constructor(public page:number, public pageSize:number, public sort:PaginationPropertySort) {
  }

  getParams(): URLSearchParams {
    let params = new URLSearchParams();
    params.set('size', `${this.pageSize}`);
    params.set('page', `${this.page}`);
    if (this.sort != null) {
      params.set('sort', `${this.sort.property},${this.sort.direction}`);
    }
    return params;
  }
}

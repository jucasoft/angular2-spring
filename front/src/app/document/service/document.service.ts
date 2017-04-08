import {Injectable} from "@angular/core";
import {Document} from "../model/vo/document";
import "rxjs/add/operator/map";
import "rxjs/add/operator/publish";
import {BaseService} from "@share/services/base.service";

@Injectable()
export class DocumentService extends BaseService<Document> {
  protected service = 'api/document';
}

import {EntityBase} from "@share/model/vo/entity-base";
export class Document extends EntityBase{

  private _versione: number;
  private _entity: String;
  private _desciption: String;
  private _type: String;

  get versione(): number {
    return this._versione;
  }

  set versione(value: number) {
    this._versione = value;
  }

  get entity(): String {
    return this._entity;
  }

  set entity(value: String) {
    this._entity = value;
  }

  get desciption(): String {
    return this._desciption;
  }

  set desciption(value: String) {
    this._desciption = value;
  }

  get type(): String {
    return this._type;
  }

  set type(value: String) {
    this._type = value;
  }

}

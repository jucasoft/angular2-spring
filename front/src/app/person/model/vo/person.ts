import {EntityBase} from "@share/model/vo/entity-base";
export class Person extends EntityBase{

  private _firstname:string;

  private _lastname:string;

  private _age:string;

  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }

  get age(): string {
    return this._age;
  }

  set age(value: string) {
    this._age = value;
  }

}

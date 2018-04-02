import {Injectable} from "@angular/core";
import {AutoCompleteService} from "ionic2-auto-complete";
import { of } from 'rxjs/Observable/of';

@Injectable()
export class CompleteTestService implements AutoCompleteService {
  labelAttribute = "name";
  maladeArray: any;


  constructor() {

    this.maladeArray = [{name: 'maxime'}];


  }

  getResults(keyword: string) {
    console.log(keyword);

    if (typeof keyword != "undefined" && keyword.length >= 3) {
      return this.maladeArray.filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));

    }
    else {
      return of({});
    }

    }

  public setMalade(malade: string[]){

    this.maladeArray = malade;
  }
}

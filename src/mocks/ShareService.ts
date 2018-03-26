import {Injectable} from "@angular/core";

@Injectable()
export class ShareService {

 user: String;

  constructor() {

  }


  getUser(): String {
    return this.user;
  }

  setUser(value: String) {
    this.user = value;
  }
}

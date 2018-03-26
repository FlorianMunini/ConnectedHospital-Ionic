import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';
import {Events, ToastController} from "ionic-angular";
import {ShareService} from "../../mocks/ShareService";
import * as BcryptJS from "bcryptjs";


/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class User {
  _user: any;

  constructor(public api: Api,public toastCtrl: ToastController, public events: Events,public shareService: ShareService) { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {


    let seq = this.api.get('');


    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in


        //this._loggedIn(res);

        for(let entry of res){
          if((entry.user==accountInfo.email)&&(BcryptJS.compareSync(accountInfo.password, entry.password))){
            console.log('yes!');

          }
        }

       /* if(BcryptJS.compareSync(this.password, result.password)) {

        }*/

     /*   if((accountInfo.email == res.user)){
          this.shareService.setUser(res.user);
        }*/
      //  this.events.publish('user',res.user );


    }, err => {
      //console.error('ERROR', err);
      console.log(err);
    });

    return seq;
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    let seq = this.api.post('signup', accountInfo);


    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
        console.log("lololololol");

      }
    }, err => {
      console.error('ERROR', err);
      console.log("lololololol");

    });

    return seq;
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this.events.publish('user',resp.user );
  }
}

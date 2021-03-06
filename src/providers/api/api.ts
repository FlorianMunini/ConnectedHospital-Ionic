import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string = 'http://192.168.43.149:8888';
  data: any

  constructor(public http: HttpClient) {
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }

    let temp = this.http.get(this.url + '/' + endpoint, reqOpts);
    console.log('temp'+temp);
    return temp;

  }

  post(endpoint: string, body: any, reqOpts?: any) {
   return this.http.post(this.url + '/' + endpoint,{email : body.email,pass : body.password}, {
     headers: {
       'Content-Type': 'application/json' ,
       'Access-Control-Allow-Origin': '*',
       'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
       'Access-Control-Allow-Headers':'X-Requested-With'
     }
   });
   // return true;


  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }
}

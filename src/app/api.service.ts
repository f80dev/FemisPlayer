/* tslint:disable */
import { Injectable } from '@angular/core';
import {$$, api} from './tools';
import {timeout} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) {

  }


  getHttpOptions(){
    const httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return httpOptions;
  }



  _get(url:string, params: string= '', _timeoutInSec= 60){
    url = api(url, params);
    return this.http.get(url, this.getHttpOptions()).pipe(timeout(_timeoutInSec * 1000));
  }

  _post(url:string, params= '', body:any, _timeoutInSec= 60){
    url = api(url, params, true, '');
    $$('Appel de ' + url);
    return this.http.post(url, body, this.getHttpOptions()).pipe(timeout(_timeoutInSec * 1000));
  }

  _delete(url:string, params= '') {
    url = api(url, params, true, '');
    return this.http.delete(url, this.getHttpOptions()).pipe();
  }

  _put(url:string, params= '', body:any, _timeoutInSec= 60){
    url = api(url, params, true, '');
    return this.http.put(url, body, this.getHttpOptions()).pipe(timeout(_timeoutInSec * 1000));
  }

  _patch(url:string, params= '', body:any, _timeoutInSec= 60){
    url = api(url, params, true, '');
    return this.http.patch(url, body, this.getHttpOptions()).pipe(timeout(_timeoutInSec * 1000));
  }


}

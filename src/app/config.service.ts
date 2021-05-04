import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {ApiService} from "./api.service";
import {Platform} from "@angular/cdk/platform";
import {HttpClient} from "@angular/common/http";
import { Location } from '@angular/common';
import {$$} from "./tools";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  visibleTuto: Boolean | boolean=false;
  user: any;
  values: any;
  config:any;
  ready=false;
  dealers:any[]=[];
  domain_server;

  unity: string ="";
  server: any={bank:""};
  tags: any={};

  constructor(private location: Location,
              private http: HttpClient,
              public platform:Platform,
              public api:ApiService) {

    this.domain_server=environment.domain_server;
  }


  public async getJson(jsonFile:string): Promise<any> {
    return Promise.resolve((await this.http.get(jsonFile).toPromise()));
  }




  /**
   * Initialisation des principaux paramètres
   * @param func
   */
  init(func:Function=null,func_error:Function=null){
    $$("Initialisation de la configuration");
  }


  refresh_dealers(){
    $$("Chargement des dealers");
    this.api._get("dealers/","").subscribe((deals:any)=>{
      this.dealers=deals;
    });
  }


  public isProd() : boolean {
    return environment.production;
  }

}

import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.sass']
})
export class FilmsComponent implements OnInit {

  films:any;
  message: string="";
  version: string="v"+environment.version;

  constructor(
    public api:ApiService,
    public router:Router,
    public routes:ActivatedRoute
  ) { }

  ngOnInit(): void {

    let department=this.routes.snapshot.queryParamMap.get('department');
    let year=this.routes.snapshot.queryParamMap.get('year');

    if(department && year){
      this.api._get("../assets/films.json").subscribe((r:any)=>{
      this.films=[];
      for(let film of r){
        let film_year=film.promo-new Date().getFullYear();
        if ((film.department.toLowerCase()==department.toLowerCase() || department=="*") && (film_year==Number(year) || year=='0')){
          if(film.videoId.startsWith('vimeo')){
            film.videoId=film.videoId.replace("vimeo","");
            film.iframe_url=null;
            film.fullscreen_url="https://player.vimeo.com/video/"+film.videoId;
          }else{
            film.iframe_url='https://embed.api.video/vod/'+film.videoId
            film.fullscreen_url="https://embed.api.video/vod/"+film.videoId;
          }
          this.films.push(film);
        }

      }
    })
    } else {
      this.message="Vous devez obtenir un lien de la FEMIS pour consulter les films";
    }


  }

}

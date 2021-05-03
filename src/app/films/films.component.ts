import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.sass']
})
export class FilmsComponent implements OnInit {

  films:any;

  constructor(
    public api:ApiService,
    public routes:ActivatedRoute
  ) { }

  ngOnInit(): void {

    let department=this.routes.snapshot.queryParamMap.get('department') || '*';
    let year=this.routes.snapshot.queryParamMap.get('year') || '*';

    this.api._get("../assets/films.json").subscribe((r:any)=>{
      this.films=[];
      for(let film of r){
        let film_year=film.promo-new Date().getFullYear();
        if ((film.department==department || department=="*") && (film_year==Number(year) || year=="*"))
          this.films.push(film);
      }
    })
  }

}

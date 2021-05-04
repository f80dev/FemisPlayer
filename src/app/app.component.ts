import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {

  constructor(
    public routes:ActivatedRoute,
    public router:Router
  ) {}

  ngOnInit(): void {
    setTimeout(()=>{
      let params=this.routes.snapshot.paramMap.get("p");
      let command=atob(params).split(",")[0];
      if(command=="player")this.router.navigate(["player"],{queryParams:{p:params}});
      if(command=="share")this.router.navigate(["share"]);
    },100);
  }

}

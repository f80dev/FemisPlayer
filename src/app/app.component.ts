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
    let params=atob(this.routes.snapshot.queryParamMap.get("p")).split(",");
    if(params[0]=="share"){
      this.router.navigate(["share"],{queryParams:{department:params[1],year:params[2]}});
    }

  }

}

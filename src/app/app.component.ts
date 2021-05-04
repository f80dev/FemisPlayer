import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  title = 'player';

  constructor(
    public router:Router,
    public routes:ActivatedRoute
  ) { }

  ngOnInit(): void {
    setTimeout(()=>{
      let department=this.routes.snapshot.queryParamMap.get('department') || '*';
      let year=this.routes.snapshot.queryParamMap.get('year') || 0;
    },100);
  }
}

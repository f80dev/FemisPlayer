import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.sass']
})
export class ShareComponent implements OnInit {
  selected_department="montage";
  url="";
  departments=[
    {name:"Tous",value:"*"},
    {name:"Image",value:"image"},
    {name:"Montage",value:"montage"},
    {name:"Décors",value:"decors"},
    {name:"Réalisation",value:"realisation"},
    {name:"Scénario",value:"scenario"}
    ]
  promos=[
    {name:"1ere année",value:1},
    {name:"2eme année",value:2},
    {name:"3eme année",value:3},
    {name:"4eme année",value:4},
    {name:"5eme année",value:5},
    {name:"Toutes",value:0}
  ];
  selected_promo=0;

  constructor() { }

  ngOnInit(): void {
    this.refresh_url();
  }

  refresh_url(){
    this.url=environment.domain_appli+"/player?department="+this.selected_department+"&year="+this.selected_promo;
  }

  open() {
    open(this.url,"_blank");
  }
}

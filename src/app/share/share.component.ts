import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.sass']
})
export class ShareComponent implements OnInit {
  selected_department: any;
  url="";
  departments=[
    {name:"Image",value:"image"},
    {name:"Montage",value:"montage"},
    {name:"Décors",value:"decors"},
    {name:"Réalisation",value:"realisation"},
    {name:"Scénario",value:"scenario"}
    ]
  promos=["1ere année","2eme année","3eme année","4eme année"];
  selected_promo: any;

  constructor() { }

  ngOnInit(): void {

  }

  refresh_url(){
    let url=environment.domain_appli+"/player?department="+this.selected_department+"&year="+this.selected_promo;
  }

  open() {
    open(this.url,"_blank");
  }
}

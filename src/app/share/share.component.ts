import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {NgNavigatorShareService} from "ng-navigator-share";
import {ClipboardService} from "ngx-clipboard";
import {showMessage} from "../tools";
import {MatSnackBar} from "@angular/material/snack-bar";

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

  constructor(
    public _clipboardService:ClipboardService,
    public toast:MatSnackBar,
    public ngNavigatorShareService:NgNavigatorShareService
  ) { }

  ngOnInit(): void {
    this.refresh_url();
  }

  refresh_url(){
    this.url=environment.domain_appli+"/player?department="+this.selected_department+"&year="+this.selected_promo;
  }



   informe_clipboard() {
    showMessage(this,"Lien du profil disponible dans le presse-papier");
  }

  copy(){
     this.informe_clipboard();
    this._clipboardService.copyFromContent(this.url);
  }

  share(){

    this.ngNavigatorShareService.share({
      title: "Les réalisations des élève de la FEMIS",
      text: "Accéder aux films de la section "+this.selected_department+" de "+this.selected_promo,
      url: this.url
    })
      .then( (response) => {console.log(response);},()=>{
        this._clipboardService.copyFromContent(this.url);
      })
      .catch( (error) => {
        this._clipboardService.copyFromContent(this.url);
      });
  }


  open() {

    open(this.url,"_blank");
  }
}

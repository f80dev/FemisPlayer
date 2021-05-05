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

  refresh(){
    let params=this.routes.snapshot.queryParamMap.get("p");
    let decod_params=atob(params).split(",");

    let department=decod_params[1];
    let year=decod_params[2];
    let dtValidty=Number(decod_params[3]);

    if(dtValidty==0 || dtValidty>new Date().getTime()) {
      if (department && year) {
        this.get_file((r: any) => {
          this.films = [];
          for (let film of r) {
            let film_year = film.promo - new Date().getFullYear();
            if ((film.department.toLowerCase() == department.toLowerCase() || department == "*") && (film_year == Number(year) || year == '0')) {
              if (film.videoId.startsWith('vimeo')) {
                film.videoId = film.videoId.replace("vimeo", "");
                film.iframe_url = null;
                film.fullscreen_url = "https://player.vimeo.com/video/" + film.videoId;
              } else {
                film.iframe_url = 'https://embed.api.video/vod/' + film.videoId
                film.fullscreen_url = "https://embed.api.video/vod/" + film.videoId;
              }
              this.films.push(film);
            }
          }
          if (this.films.length == 0) {
            this.message = "Aucun film disponible ";
            if (year != "0") this.message = this.message + "de " + year + " année";
            if (department != "*") this.message = this.message + " en section " + department;
          }
        });
      } else {
        this.message = "Vous devez obtenir un lien valide de la FEMIS pour consulter les films";
      }
    } else {
      this.message="Ce lien n'est plus valide";
    }

  }

  ngOnInit(): void {
    setTimeout(()=>{this.refresh()},500);
  }

  get_file(func:Function) {
    let obj=[
      {
        "title":"Les voyages de paul",
        "director": "Paul Dudule",
        "department": "Image",
        "promo": 2024,
        "videoId": "vi58xgut87i5XHsEYxThHygp"
      },
      {
        "title":"Roger à la plage",
        "director": "Roger Dudule",
        "department": "Montage",
        "promo": 2024,
        "videoId": "vi58xgut87i5XHsEYxThHygp"
      },
      {
        "title":"La revanche de Martine",
        "director": "Sophie Dudule",
        "department": "Image",
        "promo": 2022,
        "videoId": "vi58xgut87i5XHsEYxThHygp"
      },
      {
        "title":"Tous les garçon",
        "director": "Kevin Dudule",
        "department": "Réalisation",
        "promo": 2021,
        "videoId": "vi58xgut87i5XHsEYxThHygp"
      },
      {
        "title":"Un cornichon 2",
        "director": "Sophie Dudule",
        "department": "Photo",
        "promo": 2023,
        "videoId": "vi58xgut87i5XHsEYxThHygp"
      },
      {
        "title":"Tous les légumes, au clair de lune",
        "director": "Roger Dudule",
        "department": "Montage",
        "promo": 2025,
        "videoId": "vi58xgut87i5XHsEYxThHygp"
      },
      {
        "title":"Un cornichon",
        "director": "Sophie Dudule",
        "department": "Photo",
        "promo": 2022,
        "videoId": "vi58xgut87i5XHsEYxThHygp"
      },
      {
        "title":"tournez en rond",
        "director": "Paul Dudule",
        "department": "Image",
        "promo": 2026,
        "videoId": "vi58xgut87i5XHsEYxThHygp"
      },
      {
        "title":"Les patates de paul",
        "director": "Paul Dudule",
        "department": "Image",
        "promo": 2022,
        "videoId": "vimeo198404476"
      }
    ];

    func(obj);

  }
}

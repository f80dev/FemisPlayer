import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin/admin.component";
import {FilmsComponent} from "./films/films.component";
import {ShareComponent} from "./share/share.component";

const routes: Routes = [
  { path: 'admin', component: AdminComponent},
  { path: 'player', component: FilmsComponent},
  { path: 'share', component: ShareComponent},
  { path: 'films', component: FilmsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

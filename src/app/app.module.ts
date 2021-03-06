import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { FilmsComponent } from './films/films.component';
import {ApiService} from './api.service';
import {HttpClientModule} from "@angular/common/http";
import {SafePipe} from './safe.pipe';
import {ShareComponent} from './share/share.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {TutoComponent } from './tuto/tuto.component';
import {ClipboardModule} from "ngx-clipboard";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSliderModule} from "@angular/material/slider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FilmsComponent,
    SafePipe,
    ShareComponent,
    TutoComponent
  ],
  imports: [
    MatIconModule,
    ClipboardModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

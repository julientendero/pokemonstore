import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { cardsReducer } from './state/cards.reducer';
import { bucketReducer } from './state/bucket.reducer';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { CardViewComponent } from './card-view/card-view.component';


@NgModule({
  declarations: [
    AppComponent,
    CardViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
    MatGridListModule,
    MatSnackBarModule,
    StoreModule.forRoot({ cards: cardsReducer, bucket: bucketReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

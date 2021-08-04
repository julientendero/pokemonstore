import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { booksReducer } from './state/cards.reducer';
import { collectionReducer } from './state/bucket.reducer';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
    MatGridListModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

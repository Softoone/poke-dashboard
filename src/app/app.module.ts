import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokeTableComponent } from './poke-table/poke-table.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeHeaderComponent,
    PokeCardComponent,
    PokeTableComponent,
    PokeSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

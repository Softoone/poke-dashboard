import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { PokeHeaderComponent } from './components/poke-header/poke-header.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
import { PokeSearchComponent } from './components/poke-search/poke-search.component';
import { PokeHomeComponent } from './components/poke-home/poke-home.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeHeaderComponent,
    PokeCardComponent,
    PokeTableComponent,
    PokeSearchComponent,
    PokeHomeComponent,
    PokedexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

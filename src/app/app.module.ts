import { PokeDashboardComponent } from './poke-dashboard/poke-dashboard.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PokeDashboardComponent,
    PokeHeaderComponent,
    PokeCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

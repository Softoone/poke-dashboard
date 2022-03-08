import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokeHomeComponent } from './components/poke-home/poke-home.component';
import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";

var routes : Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: PokeHomeComponent},
  {path: 'pokedex', component: PokedexComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

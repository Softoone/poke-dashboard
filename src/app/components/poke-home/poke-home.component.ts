import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-poke-home',
  templateUrl: './poke-home.component.html',
  styleUrls: ['./poke-home.component.scss']
})
export class PokeHomeComponent {

  pokemonList : Pokemon[] = [];
  uniquePokemon : Pokemon;
  isPokemonSet : boolean = false;

  constructor() { }

  catchPokemon(event : Pokemon) {
    this.pokemonList.push(event);
  }

  catchInfoToCard(event : Pokemon) {
    this.uniquePokemon = event;
    this.isPokemonSet = true;
  }

  turnCardOff(n : number) {
    if (n < 1) {
      this.isPokemonSet = false;
    }
  }


}

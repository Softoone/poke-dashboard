import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-poke-home',
  templateUrl: './poke-home.component.html',
  styleUrls: ['./poke-home.component.scss']
})
export class PokeHomeComponent implements OnInit {

  pokemonList : Pokemon[] = [];
  uniquePokemon : Pokemon;
  private isPokemonSet : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  catchPokemon(event : Pokemon) {
    this.pokemonList.push(event);
  }

  catchInfoToCard(event : Pokemon) {
    this.uniquePokemon = event;
    this.isPokemonSet = true;
  }

  setPokemonNull() {
    this.uniquePokemon = null;
    this.isPokemonSet = false;
  }


  public get pokemon() : Pokemon {
    if (this.isPokemonSet) {
      return this.uniquePokemon;
    }

    return null;
  }


}

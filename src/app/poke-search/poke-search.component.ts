import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokeApiService } from '../service/poke-api.service';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {

  pokename : String | number;
  service : PokeApiService;
  @Output() throwPokemon = new EventEmitter<Pokemon>();


  constructor(pokeService : PokeApiService) {
    this.service = pokeService;
  }
  ngOnInit(): void {

  }

  async getRandomPoke() {
    var randomId = Math.floor(Math.random() * 898);
    var response = await this.service.get(randomId);
    this.throwPokemon.emit(response);
  }

  async getPokemon() {
    var response = await this.service.get(this.pokename);
    this.pokename = '';
    this.throwPokemon.emit(response);
  }


}

import { Pokemon } from './../models/pokemon';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokeApiService {

  private readonly apiUrl = "https://pokeapi.co/api/v2/pokemon/";
  private readonly spriteStatic = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
  private readonly spriteAnimated = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/";

  constructor(private http : HttpClient) { }

  async get(search: number | String) : Promise<Pokemon> {
    var response = await lastValueFrom(this.http.get<Pokemon>(`${this.apiUrl+search}`));
    console.log(response.stats);
    return this.setPokemon(response);
  }

  private setPokemon(pokeData : any) : Pokemon {
    var pokemon : Pokemon = {
      id: pokeData.id,
      name: pokeData.name,
      weight: pokeData.weight / 10,
      height: pokeData.height * 10,
      types: [pokeData.types[0].type.name],
      stats: {
        hp: pokeData.stats[0].base_stat,
        attack: pokeData.stats[1].base_stat,
        defense: pokeData.stats[2].base_stat,
        spAttack: pokeData.stats[3].base_stat,
        spDefense: pokeData.stats[4].base_stat,
        speed: pokeData.stats[5].base_stat
      },
      abilities: [pokeData.abilities[0].ability.name],
      sprites: {
        art: this.spriteStatic+`${pokeData.id}.png`,
        animation: this.spriteAnimated+`${pokeData.id}.gif`
      }
    };

    if (pokeData.types.length > 1) {
      pokemon.types.push(pokeData.types[1].type.name);
    }

    if (pokeData.abilities.length > 2) {
      pokemon.abilities.push(pokeData.abilities[1].ability.name);
      pokemon.abilities.push(pokeData.abilities[2].ability.name+"*");
    }else{
      pokemon.abilities.push(pokeData.abilities[1].ability.name + "*");
    }

    return pokemon;
  }


}

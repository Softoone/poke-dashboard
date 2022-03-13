import { SimplePokemon } from './../models/simple-pokemon';
import { Pokemon } from './../models/pokemon';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokeApiService {

  private readonly apiUrl = "https://pokeapi.co/api/v2/pokemon";
  private readonly spriteStatic = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
  private readonly spriteAnimated = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/";
  private readonly lastGenerationPokemon = 898;

  constructor(private http : HttpClient) { }

  async get(search: number | string) : Promise<Pokemon> {

    if (typeof search === "string") {
      search = search.toLowerCase();
    }

    try {
      let response = await lastValueFrom(this.http.get<Pokemon>(this.apiUrl + "/" + search.toString()));
      let pokemon =  this.setPokemon(response);

      return pokemon;

    } catch (error) {
      console.log(error);
    }
  }

  getAllPokemon() {
    return this.http.get<SimplePokemon>(this.apiUrl + `?limit=${this.lastGenerationPokemon}` + '&offset=0');
  }

  getSpecialForms() {
    return this.http.get<SimplePokemon>(this.apiUrl + `?limit=${10001}` + '&offset=0')
  }

  private setPokemon(pokeData : any) : Pokemon {
    let pokemon : Pokemon = {
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
        speed: pokeData.stats[5].base_stat,
        higherStat: "vazio"
      },
      abilities: [],
      sprites: {
        art: this.spriteStatic+`${pokeData.id}.png`,
        animation: this.spriteAnimated+`${pokeData.id}.gif`
      }
    };

    for (let i = 0; i < pokeData.abilities.length; i++) {
      this.checkHidden(pokeData.abilities[i],pokemon)
    }
    pokemon.stats.higherStat = this.setHigherStat(pokemon);

    // Setting double type pokes
    if (pokeData.types.length > 1) {
      pokemon.types.push(pokeData.types[1].type.name);
    }

    return pokemon;
  }

  private checkHidden(index : any, pokemon : Pokemon) {
    if (index.is_hidden) {
      pokemon.abilities.push(index.ability.name + "*");
    }else{
      pokemon.abilities.push(index.ability.name);
    }
  }

  private setHigherStat(p : Pokemon) : string {
    let stats = [];
    stats.push(p.stats.hp);
    stats.push(p.stats.attack);
    stats.push(p.stats.defense);
    stats.push(p.stats.spAttack);
    stats.push(p.stats.spDefense);
    stats.push(p.stats.speed);

    let max = Math.max.apply(null,stats)
    let strongerStat =  this.defineStat(stats.indexOf(max));

    return strongerStat;
  }

  private defineStat(index : number) : string {
    switch (index) {
      case 0:
        return "HP";
      case 1:
        return "ATK"
      case 2:
        return "DEF"
      case 3:
        return "SP.ATK"
      case 4:
        return "SP.DEF"
      case 5:
        return "SPD"
    }
  }
}

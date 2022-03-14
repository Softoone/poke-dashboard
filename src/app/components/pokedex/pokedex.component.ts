import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon';
import { Results } from './../../models/simple-pokemon';
import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  gen1 :  Pokemon[];
  gen2 :  Pokemon[];
  gen3 :  Pokemon[];
  gen4 :  Pokemon[];
  gen5 :  Pokemon[];
  gen6 :  Pokemon[];
  gen7 :  Pokemon[];
  gen8 :  Pokemon[];
  specialForms : Pokemon[];
  activeGeneration : Pokemon[];
  isLoaded : boolean = false;

  constructor(private pokeService : PokeApiService) { }

  ngOnInit(): void {
    this.pokeService.getAllPokemon()
    .subscribe(data => {
      console.log(data.results)
      this.getDetailsOfPokemon(data.results)
      this.changeData('')
    })

    this.pokeService.getSpecialForms()
    .subscribe(data => {
      this.getDetailsOfPokemon(data.results)
      console.log(this.activeGeneration);
      this.isLoaded = true;
    })
  }

  private getDetailsOfPokemon(data : Results[]) {
    this.initializeLists();
    data.map(async ({name},index) => {
      let poke = await this.pokeService.get(name);
      this.checkGeneration(index,poke)
    })
  }

  private checkGeneration(pokedexNumber : number, p : Pokemon) {

    if (pokedexNumber < 151) this.gen1.push(p);
    if (pokedexNumber > 150 && pokedexNumber < 251) this.gen2.push(p);
    if (pokedexNumber > 250 && pokedexNumber < 386) this.gen3.push(p);
    if (pokedexNumber > 385 && pokedexNumber < 493) this.gen4.push(p);
    if (pokedexNumber > 492 && pokedexNumber < 649) this.gen5.push(p);
    if (pokedexNumber > 648 && pokedexNumber < 721) this.gen6.push(p);
    if (pokedexNumber > 720 && pokedexNumber < 809) this.gen7.push(p);
    if (pokedexNumber > 808 && pokedexNumber < 898) this.gen8.push(p);
    if (pokedexNumber > 898) this.specialForms.push(p);
  }

  private initializeLists() {
    this.gen1 = [];
    this.gen2 = [];
    this.gen3 = [];
    this.gen4 = [];
    this.gen5 = [];
    this.gen6 = [];
    this.gen7 = [];
    this.gen8 = [];
    this.specialForms = [];
  }

  changeData(route : string) {

    switch (route) {
      case 'gen2':
        return this.activeGeneration = this.gen2;
      case 'gen3':
        return this.activeGeneration = this.gen3;
      case 'gen4':
        return this.activeGeneration = this.gen4;
      case 'gen5':
        return this.activeGeneration = this.gen5;
      case 'gen6':
        return this.activeGeneration = this.gen6;
      case 'gen7':
        return this.activeGeneration = this.gen7;
      case 'gen8':
        return this.activeGeneration = this.gen8;
      case 'special':
        return this.activeGeneration = this.specialForms;

      default:
        this.activeGeneration = this.gen1;
    }
  }

  // private filtrarPokemons(data : {name : string}) {
  //   console.log(data.results);
  //   data.results.filter(
  //     value => console.log(value)
  //   )

  // }

}

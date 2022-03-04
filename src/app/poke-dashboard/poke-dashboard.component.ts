import { PokeApiService } from './../service/poke-api.service';

import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-poke-dashboard',
    templateUrl:'./poke-dashboard.component.html',
    styleUrls:['./poke-dashboard.component.scss'],

})
export class PokeDashboardComponent implements OnInit{

  service : PokeApiService;

  constructor(pokeService : PokeApiService) {
    this.service = pokeService;
  }

  getRandomPoke() {
    var response = this.service.get(410);
  }

  ngOnInit(): void {

  }

}

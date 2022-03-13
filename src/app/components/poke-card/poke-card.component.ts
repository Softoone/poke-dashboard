import { PokeHomeComponent } from './../poke-home/poke-home.component';
import { Pokemon } from '../../models/pokemon';
import { Component, Input, OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnChanges {

  @Input() pokemonInfo : Pokemon;
  pokemonCardRow : Pokemon[] = [];

  constructor(public home : PokeHomeComponent) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.pokemonInfo.currentValue);
    this.pokemonCardRow.push(this.pokemonInfo);
  }

  disposeCard(index : number) {
    this.pokemonCardRow.splice(index,1);
    this.home.turnCardOff(this.pokemonCardRow.length);
  }

  setAtributoCompetitivo(stat : String) : String {
    switch (stat) {
      case "HP":
        return "Tank"
      case "ATK":
        return "Physical Attacker"
      case "DEF":
        return "Physical Wall"
      case "SP.ATK":
        return "Special Attacker"
      case "SP.DEF":
        return "Special Wall"
      case "SPD":
        return "Fast Sweeper"
    }
    return
  }
}

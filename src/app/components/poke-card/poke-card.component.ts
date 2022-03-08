import { PokeHomeComponent } from './../poke-home/poke-home.component';
import { Pokemon } from '../../models/pokemon';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {

  @Input() pokemonInfo : Pokemon;
  homeC : PokeHomeComponent;

  constructor(home : PokeHomeComponent,private sanitizer : DomSanitizer) {
    this.pokemonInfo = home.pokemon;
    this.homeC = home;
  }

  ngOnInit(): void {
  }

  disposeCard() {
    this.homeC.setPokemonNull();
  }

  getSanitizerUrl (url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  setClasseCompetitiva(stat : String) : String {
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

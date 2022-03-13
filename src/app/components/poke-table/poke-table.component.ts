import { Pokemon } from '../../models/pokemon';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss']
})
export class PokeTableComponent implements OnInit {

  @Input() pokemonRow : Pokemon[];
  @Output() sendToCard = new EventEmitter<Pokemon>()

  constructor() { }

  ngOnInit(): void {
  }

  openPokemonCard(index : number) {
    this.sendToCard.emit(this.pokemonRow[index])
  }

}

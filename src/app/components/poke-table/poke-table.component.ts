import { PokeCardComponent } from './../poke-card/poke-card.component';
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
  displayedColumns: string[] = ['poke-name', 'poke-type', 'poke-ability', 'poke-hstat'];

  constructor() { }

  ngOnInit(): void {
  }

  openPokemonCard(index : number) {
    this.sendToCard.emit(this.pokemonRow[index])
  }

}

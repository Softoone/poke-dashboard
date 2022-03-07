import { Pokemon } from './../models/pokemon';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss']
})
export class PokeTableComponent implements OnInit {

  @Input() pokemonRow : Pokemon[];

  constructor() { }

  ngOnInit(): void {
  }

}

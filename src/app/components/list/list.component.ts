import { Component, EventEmitter, Input, Output } from '@angular/core';
import Pokemon from 'src/types/Pokemon.type';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() pokemons: Pokemon[] | undefined;
  @Output() selectPokemon = new EventEmitter<Pokemon>();
}

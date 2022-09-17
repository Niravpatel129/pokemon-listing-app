import { Component } from '@angular/core';
import Pokemon from 'src/types/Pokemon.type';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pokemon-listing-app';
  selectedPokemon: Pokemon | undefined;
  searchTerm = '';

  constructor(private PokemonService: PokemonService) {}

  getAllPokemons(): Pokemon[] {
    return this.PokemonService.getPokemons();
  }

  handleSelectPokemon(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }
}

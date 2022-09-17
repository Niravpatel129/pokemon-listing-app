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

  constructor(private PokemonService: PokemonService) {}

  getAllPokemons(): Pokemon[] {
    return this.PokemonService.getPokemons();
  }
}

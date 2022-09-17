import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}

  getPokemons() {
    return [
      {
        name: 'Bulbasaur',
        type: 'Grass',
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      },
      {
        name: 'Charmander',
        type: 'Fire',
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
      },
      {
        name: 'Squirtle',
        type: 'Water',
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
      },
    ];
  }
}

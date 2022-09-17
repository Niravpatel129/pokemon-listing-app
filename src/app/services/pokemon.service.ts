import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Pokemon from 'src/types/Pokemon.type';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  _page: number = 1;
  pokemons: Pokemon[] = [];
  apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=5&offset=${
    this._page * 10
  }`;

  get pokemon(): Pokemon[] {
    return this.pokemons;
  }

  constructor(private http: HttpClient) {
    this.fetchPokemons();

    console.log(this.pokemons);
  }

  fetchSinglePokemon(name: string): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + name);
  }

  fetchPokemons() {
    let pokemons: any = [];

    this.http.get(this.apiUrl).subscribe((res: any) => {
      this.pokemons = res.results;
      console.log('🚀 this.pokemons', this.pokemons);
    });

    return pokemons;
  }

  getPokemons(): Pokemon[] {
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
      {
        name: 'Pikachu',
        type: 'Electric',
        image:
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
      },
    ];
  }
}

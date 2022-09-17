import { Component, Input } from '@angular/core';
import Pokemon from 'src/types/Pokemon.type';
import { PokemonService } from './../../services/pokemon.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
  @Input() selectedPokemon: Pokemon | undefined;
  selectedPokemonDetails: any = {};

  constructor(private PokemonService: PokemonService) {}

  ngOnChanges(): void {
    if (!this.selectedPokemon?.name) return;

    this.PokemonService.fetchSinglePokemon(
      this.selectedPokemon?.name.toLowerCase()
    ).subscribe((res) => {
      this.selectedPokemonDetails = res;
    });
  }
}

import { Component, Input, OnInit } from '@angular/core';
import Pokemon from 'src/types/Pokemon.type';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() pokemons: Pokemon[] | undefined;

  ngOnInit(): void {
    console.log(this.pokemons);
  }
}

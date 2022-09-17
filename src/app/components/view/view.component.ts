import { Component, Input, OnInit } from '@angular/core';
import Pokemon from 'src/types/Pokemon.type';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  @Input() selectedPokemon: Pokemon | undefined;

  constructor() {}

  ngOnInit(): void {}
}

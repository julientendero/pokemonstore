import { Component } from '@angular/core';

import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showFiller = false;

  constructor(public pokemonService: PokemonService)
  {
    this.pokemonService.getpokemons(1, 50);
  }

}

import { Injectable } from '@angular/core';

import { PokemonHttpService } from './http/pokemon-http.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(public pokemonHttpService: PokemonHttpService) { }


  public getpokemons(page: number, pageSize: number)
  {
    this.pokemonHttpService.getpokemons(page, pageSize);
  }


}

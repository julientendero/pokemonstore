import { Injectable } from '@angular/core';

import { PokemonHttpService } from './http/pokemon-http.service';

import { Book } from '../model/card.model';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(public pokemonHttpService: PokemonHttpService) { }


  public getpokemons(page: number, pageSize: number): Observable<Array<Book>>
  {
    return this.pokemonHttpService.getpokemons(page, pageSize).pipe(map((books: any) => 
    {
      
      console.log("TEST 1000: ", books);
      if (books && books.data)
      {
        return books.data.map((book: any) => book);
      }
      else
      {
        return [];
      }
    }
    ));
  }


}

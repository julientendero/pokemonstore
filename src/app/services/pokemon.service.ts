import { Injectable } from '@angular/core';

import { PokemonHttpService } from './http/pokemon-http.service';

import { Card } from '../model/card.model';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Service relatif aux informations relatives aux cartes
 * pokemon récupérées auprès de l'API dédiée
 */


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(public pokemonHttpService: PokemonHttpService) { }

  /**
   * Récupération et traitement des cartes pokemons récupérées à partir de l'API en ligne
   * @param page numéro de la page dont on souhaite récupérer l'ensemble des cartes
   * @param pageSize nombre de cartes présentes par page
   * @returns un Observable sur un tableeu d'entités Card
   */
  public getpokemons(page: number, pageSize: number): Observable<Array<Card>>
  {
    return this.pokemonHttpService.getpokemons(page, pageSize).pipe(map((cards: any) => 
    {
      if (cards && cards.data)
      {
        return cards.data.map((card: any) => card);
      }
      else
      {
        return [];
      }
    }
    ));
  }


}

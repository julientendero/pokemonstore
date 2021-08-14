import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

/**
 * Service permettant l'execution de requètes HTTP à partir de l'API contenant l'ensemble
 * des données relatives aux cartes Pokemon
 */

@Injectable({
  providedIn: 'root'
})
export class PokemonHttpService {

  /**
   * Identifant de l'API devant être renseigné dans les Headers de chaque requète
   * (sous le header 'X-Api-Key') afin d'executer un nombre plus important de reqètes
   */
  private API_KEY: string = 'f18e8261-b63b-4b18-af9e-a90c90152d82';

  constructor(private http: HttpClient)
  {
  }
/**
 * Fonction permettant de récupérer auprès de l'API pokemontcg
 * un ensemble de cartes pokemons en fonction du numéro de la page
 * souhaitée et du nombre de cartes par pages
 * @param page numéro de la page dont on souhaite récupérer les cartes pokemons
 * @param pageSize nombre de cartes pokemons par page
 * @returns Observable sur la réponse de la requète GET
 */

  public getpokemons(page: number, pageSize: number)
  {
    const url = 'https://api.pokemontcg.io/v2/cards';

    // Initialisation du header
    let headers: HttpHeaders = new HttpHeaders({'X-Api-Key': this.API_KEY});

    // Initialisation des paramètres de la requète GET
    let params: HttpParams = new HttpParams();
    params = params.append('page', page);         // numéro de la page
    params = params.append('pageSize', pageSize); // nombre de cartes par page

    const options: any =  {
      headers: headers,
      params: params
    };   
    
    return this.http.get(url, options);
  }
}

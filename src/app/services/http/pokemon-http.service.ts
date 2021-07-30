import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonHttpService {

  private API_KEY: string = 'f18e8261-b63b-4b18-af9e-a90c90152d82';

  constructor(private http: HttpClient)
  {

  }

  public getpokemons(page: number, pageSize: number)
  {
    const url = 'https://api.pokemontcg.io/v2/cards';

    let headers: HttpHeaders = new HttpHeaders({'X-Api-Key': this.API_KEY});

    let params: HttpParams = new HttpParams();
    params = params.append('page', page);
    params = params.append('pageSize', pageSize);

    const options: any =  {
      headers: headers,
      params: params
    };    

    this.http.get(url, options).subscribe(resPokemon => {
      console.log("=====> GET POKEMONS 3: ", resPokemon);
    },
    error => {
      console.log("=====> GET POKEMONS 4: ", error);
    });
  }
}

import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { selectBookCollection, selectBooks } from './state/cards.selector';
import { AppState } from "./state/app.state";
import {
  retrievedBookList,
  addBook,
  removeBook,
} from './state/cards.actions';

import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showFiller = false;

  public books$ = this.store$.pipe(select(selectBooks));
  public bookCollection$ = this.store$.pipe(select(selectBookCollection));


  constructor(
    private store$: Store<AppState>,
    public pokemonService: PokemonService)
  {
    //this.pokemonService.getpokemons(1, 50);
  }

  onAdd(bookId: string) {
    this.store$.dispatch(addBook({ bookId }));
  }
 
  onRemove(bookId: string) {
    this.store$.dispatch(removeBook({ bookId }));
  }

  ngOnInit() {
    this.pokemonService.getpokemons(1, 50).subscribe((Book) => {

      console.log("GET POKEMON 1000: ", Book);

      this.store$.dispatch(retrievedBookList({ Book }))
    });
  }

}

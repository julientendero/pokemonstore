import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { selectCardCollection, selectCards } from './state/cards.selector';
import { AppState } from "./state/app.state";
import {
  retrievedCardList,
  addCard,
  removeCard,
} from './state/cards.actions';

import { PokemonService } from './services/pokemon.service';

// Composant principal de l'application client de gestion des cartes Pokemon
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showFiller = false;

  // Observable sur l'ensemble des cartes disponibles à la vente
  public cards$ = this.store$.pipe(select(selectCards));

  // Observable sur l'ensemble des cartes selectionnées dans le panier
  public cardsBucket$ = this.store$.pipe(select(selectCardCollection));

  // Nombre d'articles ajoutés au panier
  public cptCardsInBucket: number = 0;

  // Prix total des articles présent dans le panier
  public totalPriceInBucket: number = 0;

  constructor(
    private store$: Store<AppState>,
    public pokemonService: PokemonService)
  {
  }

  public onAdd(card: any) {
    const cardId: string = card.id;
    this.store$.dispatch(addCard({ cardId }));
    this.cptCardsInBucket++;

    if (card
      && card.cardmarket
      && card.cardmarket.prices
      && card.cardmarket.prices.lowPrice)
    {
      this.totalPriceInBucket += card.cardmarket.prices.lowPrice;
      this.totalPriceInBucket = Math.round(this.totalPriceInBucket * 100) / 100;
    }
  }
 
  public onRemove(card: any) {
    const cardId: string = card.id;
    this.store$.dispatch(removeCard({ cardId }));
    this.cptCardsInBucket--;

    if (card
      && card.cardmarket
      && card.cardmarket.prices
      && card.cardmarket.prices.lowPrice)
    {
      this.totalPriceInBucket -= card.cardmarket.prices.lowPrice;
      this.totalPriceInBucket = Math.round(this.totalPriceInBucket * 100) / 100;
    }
  }

  public doScroll(elmnt: HTMLElement)
  {
    setTimeout(function(){ 

      elmnt.scrollIntoView();
    }, 50);
    
  }

  // Une fois le composant initialisé, on utilise le service PokemonService pour
  // récupérer la première page de l'ensemble des cartes (chaque page contenant 50 cartes)
  ngOnInit() {
    this.pokemonService.getpokemons(1, 50).subscribe((Card) => {

      // Une fois les données relatives aux cartes récupérées, on les insérère dans l'état global
      // en utilisant le store et la fonction retrievedCardList prévue à cet effet
      this.store$.dispatch(retrievedCardList({ Card }));
    });
  }

}

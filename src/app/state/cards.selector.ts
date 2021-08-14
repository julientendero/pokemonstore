import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { Card } from "../model/card.model";

// Selecteur sur l'ensemble des cartes disponibles à la vente
export const selectCards = createSelector(
  (state: AppState) => state.cards,
  (cards: Array<Card>) => cards
);
 
export const selectCollectionState = createFeatureSelector<
  AppState,
  Array<string>
>("bucket");
 
// Selecteur sur les cartes ajoutées dans le panier, vérification pour chaque
// carte du panier si la carte est présente parmi les cartes disponibles à la vente
export const selectCardCollection = createSelector(
  selectCards,
  selectCollectionState,
  (cards: Array<Card>, bucket: Array<string>) => {
    return bucket.map((id) => cards.find((card) => card.id === id));
  }
);
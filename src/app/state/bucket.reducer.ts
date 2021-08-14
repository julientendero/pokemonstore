import { createReducer, on, Action } from '@ngrx/store';
import { addCard, removeCard } from './cards.actions';

// Etat correspondant au contenu du panier
export const initialState: ReadonlyArray<string> = [];
 
// ensemble des fonctions relatives au traitement des données
// contenus dans le panier
export const bucketReducer = createReducer(
  initialState,

  // Suppression d'une carte du panier
  on(removeCard, (state, { cardId }) => state.filter((id) => id !== cardId)),

  // Ajout d'une carte dans le panier
  on(addCard, (state, { cardId }) => {
    if (state.indexOf(cardId) > -1) return state;
 
    return [...state, cardId];
  })
);
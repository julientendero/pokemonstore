import { createReducer, on, Action } from '@ngrx/store';

import { retrievedCardList } from './cards.actions';
import { Card } from '../model/card.model';

/**
 * Ensemble des fonctions relatives au traitement des cartes disponibles
 * affichées à l'écran
 */

// Ensemble des cartes disponibles
export const initialState: ReadonlyArray<Card> = [];

export const cardsReducer = createReducer(
  initialState,
  on(retrievedCardList, (state, { Card }) => [...Card]) // Insertions de cartes dans l'état global
);
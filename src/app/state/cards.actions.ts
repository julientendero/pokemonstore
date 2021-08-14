import { createAction, props } from '@ngrx/store';
 
/**
 * Ensemble des actions possible dans l'état global de l'application.
 * Permet globalement la gestion des produits affichés à l'écran et la gestion du panier
 */

// Ajout d'une carte pokemon dans le panier courant
export const addCard = createAction(
  '[Card List] Add Card',
  props<{ cardId: any }>()
);
 
// Suppression d'une carte pokemon du panier courant
export const removeCard = createAction(
  '[Card Collection] Remove Card',
  props<{ cardId: any }>()
);
 
// Récupération des cartes disponibles dans l'état
export const retrievedCardList = createAction(
  '[Card List/API] Retrieve Cards Success',
  props<{ Card: any }>()
);
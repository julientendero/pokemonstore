import { Card } from '../model/card.model';

/**
 * Description de l'état global de l'application client
 */
export interface AppState {
  cards: Array<Card>;     // ensemble des cartes affichées sur l'interface
  bucket: Array<string>;  // ensemble des cartes selectionnées dans le panier
}
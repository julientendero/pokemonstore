import { Book } from '../model/card.model';

export interface AppState {
  books: Array<Book>;
  collection: Array<string>;
}
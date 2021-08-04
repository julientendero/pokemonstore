import { createReducer, on, Action } from '@ngrx/store';

import { retrievedBookList } from './cards.actions';
import { Book } from '../model/card.model';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { Book }) => [...Book])
);
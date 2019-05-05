import {Action} from '@ngrx/store';
import {SearchResult} from '../domain/searchResult/searchResult';

export const LOADING = 'Cat Loading';

export const SEARCH = 'Cat Search';
export const SEARCH_COMPLETE = 'Cat Search Complete';


export class Search implements Action {
  readonly type = SEARCH;

  constructor(public payload: string) {
  }
}

export class SearchDone implements Action {
  readonly type = SEARCH_COMPLETE;

  constructor(public payload: SearchResult[]) {
  }
}

export type Actions = Search | SearchDone;


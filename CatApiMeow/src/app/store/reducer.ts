import {SearchResult} from '../domain/cat/cat';
import * as CatActions from './actions';

export interface State {
  loading: boolean;
  searchTerms: string;
  results: SearchResult[];
}

const initialState: State = {
  loading: false,
  searchTerms: '',
  results: []
};

export function reducer(state = initialState, action: CatActions.Actions): State {
  switch (action.type) {
    case CatActions.SEARCH: {
      return {
        ...state,
        loading: true,
        searchTerms: action.payload
      };
    }
    case CatActions.SEARCH_COMPLETE: {
      return {
        ...state,
        loading: false,
        results: action.payload
      };
    }
    default: {
      return state;
    }
  }
}


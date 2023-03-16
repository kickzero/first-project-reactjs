import { ACT_FETCH_ARTICLES_GENERAL, ACT_FETCH_ARTICLES_LATEST, ACT_FETCH_ARTICLES_POPULAR } from "./action"

const initState = {
  articlesLatest: [],
  articlesPolular: [],
  articlesGenernal: [],
}

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ARTICLES_LATEST:
      return {
        ...state,
        articlesLatest: action.payload.posts,
      }
    case ACT_FETCH_ARTICLES_POPULAR:
      return {
        ...state,
        articlesPolular: action.payload.posts,
      }
      case ACT_FETCH_ARTICLES_GENERAL:
        return {
          ...state,
          articlesGenernal: action.payload.posts,
        }
    default:
      return state;
  }
}

export default reducer;
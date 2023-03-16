import { ACT_FETCH_ARTICLES_GENERAL, ACT_FETCH_ARTICLES_LATEST, ACT_FETCH_ARTICLES_POPULAR, ACT_FETCH_ARTICLES_SEARCH } from "./action"

const initState = {
  articlesLatest: [],
  articlesPolular: [],
  articlesGenernal: {
    list: [],
    currentPage: 1,
    totalPage: 1
  },
  articlesSearch: [],
  currentPage: 1,
  totalPage: 0
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
        articlesGenernal: {
          list: action.payload.page === 1 ? action.payload.posts : [...state.articlesGenernal.list, ...action.payload.posts],
          currentPage: action.payload.page,
          totalPage: action.payload.totalPage,
        }
      }
    case ACT_FETCH_ARTICLES_SEARCH:
      return {
        ...state,
        articlesSearch: action.payload.page === 1 ? action.payload.posts : [...state.articlesSearch, ...action.payload.posts],
        currentPage: action.payload.page,
        totalPage: action.payload.totalPage,
      }
    default:
      return state;
  }
}

export default reducer;
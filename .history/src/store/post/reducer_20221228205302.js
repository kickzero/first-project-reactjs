import { ACT_FETCH_ARTICLES_GENERAL, ACT_FETCH_ARTICLES_LATEST, ACT_FETCH_ARTICLES_POPULAR, ACT_FETCH_ARTICLES_SEARCH, ACT_FETCH_ARTICLE_DETAIL, ACT_FETCH_ARTICLE_RELATED } from "./action"

const initState = {
  articlesLatest: [],
  articlesPolular: [],
  articlesPaging: {
    list: [],
    currentPage: 1,
    totalPage: 1
  },
  articlesSearch: {
    list: [],
    currentPage: 1,
    totalPage: 1
  },
  currentPage: 1,
  totalPage: 0,
  articlesDetail: [],
  articlesRelated: [],
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
        articlesSearch: {
          list: action.payload.page === 1 ? action.payload.posts : [...state.articlesSearch.list, ...action.payload.posts],
          currentPage: action.payload.page,
          totalPage: action.payload.totalPage,
        }
      }
      case ACT_FETCH_ARTICLE_DETAIL:
      return {
        ...state,
        articlesDetail: action.payload.post,
      }
      case ACT_FETCH_ARTICLE_RELATED:
      return {
        ...state,
        articlesRelated: action.payload.post,
      }
    default:
      return state;
  }
}

export default reducer;
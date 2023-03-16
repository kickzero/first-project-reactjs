import { ACT_FETCH_ALL_CATEGORIES, ACT_FETCH_ARTICLES_GENERAL, ACT_FETCH_ARTICLES_LATEST, ACT_FETCH_ARTICLES_POPULAR } from "./action"

const initState = {
  listCategory: [],
}

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ALL_CATEGORIES:
      return {
        ...state,
        listCategory: action.payload.listCategories,
      }
    default:
      return state;
  }
}

export default reducer;
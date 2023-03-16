import { ACT_FETCH_ARTICLES_LATEST } from "./action"

const initState = {
  articlesLatest: [],
}

function reducer(state = initState, action){
  switch (action.type) {
    case ACT_FETCH_ARTICLES_LATEST:
      return {
        ...state,
        articlesLatest: action.payload.posts,
      }
    default:
      return state;
  }
}

export default reducer;
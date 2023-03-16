import { ACT_FETCH_ARTICLES_LATEST } from "./action"

const initState = {
  articleLatest: [],
}

function reducer(state = initState, action){
  switch (action.type) {
    case ACT_FETCH_ARTICLES_LATEST:
      return {
        ...state
      }
    default:
      return state
  }
}

export default reducer;
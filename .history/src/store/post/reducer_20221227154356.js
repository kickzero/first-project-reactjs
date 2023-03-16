const initState = {
  articleLatest: [],
}

function reducer(state = initState, action){
  switch (action.type) {
    case ACT_FETCH_ARTICES_LATEST:
      return {
        ...state
      }
    default:
      return state
  }
}
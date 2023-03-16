import { ATC_GET_MENU } from "./action";

const initState = {
    menus: [],
}

function reducer(state = initState, action) {
    switch (action.type) {
        case ATC_GET_MENU:
            return {
                ...state,
                menus: action.payload.menus
            }

        default:
            return state
    }
}

export default reducer;
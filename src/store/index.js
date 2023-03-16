import { combineReducers, createStore, applyMiddleware } from 'redux';
import postReducer from './post/reducer';
import userReducer from './user/reducer';
import categoryReducer from './category/reducer';
import menuReducer from './menu/reducer';
import commentReducer from './comment/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    POST: postReducer,
    USER: userReducer,
    CATEGORY: categoryReducer,
    MENU: menuReducer,
    COMMENT: commentReducer,
}
)
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;